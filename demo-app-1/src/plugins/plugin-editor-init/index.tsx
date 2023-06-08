import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { injectAssets } from '@alilc/lowcode-plugin-inject';
import assets from '../../services/assets.json';
import {getLocalSchema, getProjectSchema} from '../../services/mockService';
import {changeComponentProps, getCopySchema, useSpecialImgByUserSelect} from "../plugin-simulator-locale";


function debounce(func, wait) {
  let timeout: any;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function handleResize(project) {
  const screenWidth = window.innerWidth;
  console.log(`Screen width: ${screenWidth}`);
  const {componentTree, copySchema} = getCopySchema()

  if(screenWidth <= 768){
    window.gateIsPhone = true
  } else {
    window.gateIsPhone = false

    // 根据当前屏幕宽度，设置row
    console.log('componentTree', componentTree);
  }
  changeComponentProps(componentTree)
  project.importSchema(copySchema)
}

const debouncedResize = debounce(handleResize, 500);
const listenScreenWidthChange = (project)=>{
  window.addEventListener('resize', ()=>{debouncedResize(project)});
}

const EditorInitPlugin = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
      const { material, project, config } = ctx;
      const scenarioName = options['scenarioName'];
      const scenarioDisplayName = options['displayName'] || scenarioName;
      const scenarioInfo = options['info'] || {};
      // 保存在 config 中用于引擎范围其他插件使用
      config.set('scenarioName', scenarioName);
      config.set('scenarioDisplayName', scenarioDisplayName);
      config.set('scenarioInfo', scenarioInfo);

      // 设置物料描述

      await material.setAssets(await injectAssets(assets));

      const schema = await getProjectSchema(scenarioName);

      if(schema){
        window.schemaFromNetWord =  schema
        // todo 写死当前为亮色 + PC端, 用于
        window.gateIsPhone = false
        window.gateIsDark = false

      }
      // 加载 schema
      project.importSchema(schema as any);

      // 监听页面 width 变化，如果小于 768 ，将 window.gateIsPhone = true
      listenScreenWidthChange(project)
    },
  };
}
EditorInitPlugin.pluginName = 'EditorInitPlugin';
EditorInitPlugin.meta = {
  preferenceDeclaration: {
    title: '保存插件配置',
    properties: [
      {
        key: 'scenarioName',
        type: 'string',
        description: '用于localstorage存储key',
      },
      {
        key: 'displayName',
        type: 'string',
        description: '用于显示的场景名',
      },
      {
        key: 'info',
        type: 'object',
        description: '用于扩展信息',
      }
    ],
  },
};
export default EditorInitPlugin;
