import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';


// todo 将 src/template 目录移动到 src/common/model-template

init()




// 函数
function init(){
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const modelName = process.argv[2]

  const sourceDirPath = path.resolve(__dirname, '../../template');
  const targetDirPath = path.resolve(__dirname, `../../${modelName}`);

  exec({
    newModelName: modelName,
    sourceDirPath,
    targetDirPath,
  })

}
function exec({newModelName, sourceDirPath, targetDirPath}){
  copyTemplateDirToSrcDir({sourceDirPath, targetDirPath})
  changeTemplateToNewModelName({targetDirPath, newModelName})
  addNewModelToAppImportsList()
}
// 1. 递归复制 ./src/common/model-template/template 目录，放到 src 目录中
function copyTemplateDirToSrcDir({sourceDirPath, targetDirPath}){

  // 创建目标目录
  fs.mkdirSync(targetDirPath, { recursive: true });

  // 复制源目录中的所有文件和子目录到目标目录
  const files = fs.readdirSync(sourceDirPath);
  for (const file of files) {
    const sourcePath = path.join(sourceDirPath, file);
    const targetPath = path.join(targetDirPath, file);
    const stats = fs.statSync(sourcePath);
    if (stats.isDirectory()) {
      copyTemplateDirToSrcDir({sourceDirPath: sourcePath, targetDirPath: targetPath});
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}
// 2. 将 template 目录所有内容的  template ⇒ ${newModelName}
function changeTemplateToNewModelName({targetDirPath, newModelName, callback = ()=>{}}) {
  // 获取目标目录中所有文件的文件路径
  const fileList = getFilesInDirectory(targetDirPath);

  // 读取所有文件的内容，并替换 "template" 字符串
  fileList.forEach((filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return callback(err);
      }

      const temNewData = data.replace(/template/g, newModelName);
      const newData = temNewData.replace(/Template/g, capitalizeFirstLetter(newModelName));

      // 将替换后的内容写入文件
      fs.writeFile(filePath, newData, (err) => {
        if (err) {
          return callback(err);
        }
        // 修改文件名称
        let filePathSplitList = filePath.split(newModelName)
        if(filePathSplitList[1]){
          let newFilPath =  `${filePathSplitList[0]}${newModelName}${filePathSplitList[1].replace(/template/g, newModelName)}`
          fs.rename(filePath, newFilPath, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }

      });
    });
  });

  callback(null);
}

// 3. 在 app.module.ts imports 数组中，追加 newModel
// todo 实现自动在 appmoules 中追加newModel 功能
function addNewModelToAppImportsList(){

}

function replaceTemplateInFiles(dirPath, newString, fileList = []) {
  // 读取目录中的所有文件和子目录
  const files = fs.readdirSync(dirPath);

  // 遍历文件列表
  for (const file of files) {
    // 获取文件的完整路径
    const filePath = path.join(dirPath, file);

    // 获取文件的状态信息
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // 如果是子目录，则递归读取子目录中的文件
      getFilesInDirectory(filePath, newString, fileList);
    } else {
      // 如果是文件，则将文件名添加到文件列表中
      const newFilePath = filePath.replace(dirPath, `${dirPath}/${newString}`);
      fileList.push(newFilePath);
    }
  }

  return fileList;
}

function getFilesInDirectory(dirPath, fileList = []) {
  // 读取目录中的所有文件和子目录
  const files = fs.readdirSync(dirPath);

  // 遍历文件列表
  for (const file of files) {
    // 获取文件的完整路径
    const filePath = path.join(dirPath, file);

    // 获取文件的状态信息
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // 如果是子目录，则递归读取子目录中的文件
      getFilesInDirectory(filePath, fileList);
    } else {
      // 如果是文件，则将文件路径添加到文件列表中
      fileList.push(filePath);
    }
  }

  return fileList;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
