import { material, project } from '@alilc/lowcode-engine';
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { Message, Dialog } from '@alifd/next';
import { IPublicTypeProjectSchema, IPublicEnumTransformStage } from '@alilc/lowcode-types';
import DefaultPageSchema from './defaultPageSchema.json';
import DefaultI18nSchema from './defaultI18nSchema.json';
import {createSchemaRequest, getSchemaRequest, updateSchemaRequest} from "./request";
import {changeComponentProps, findComponentByName} from "../plugins/plugin-simulator-locale";

const generateProjectSchema = (pageSchema: any, i18nSchema: any): IPublicTypeProjectSchema => {
  return {
    componentsTree: [pageSchema],
    componentsMap: material.componentsMap as any,
    version: '1.0.0',
    i18n: i18nSchema,
  };
}

export const getLocalSchema = ()=>{
  return  JSON.stringify(project.exportSchema(IPublicEnumTransformStage.Save))
}

// 与 changeComponentProps 需要处理的组件保持一致
export function changeComponentToPcAndLight(componentTree: any){
  // 如果组件有pc or 移动端 需要修改的样式，改这里 changeComponentProps  changeComponentToPcAndLight
  changeBannerToPcAndLight(componentTree)
  changeTimeLineVerticalToPcAndLight(componentTree)
  changeNewCardToPcAndLight(componentTree)
  changeFAQSToPcAndLight(componentTree)

}

function changeBannerToPcAndLight(componentTree: any) {
  let bannerList = findComponentByName("Banner", componentTree)
  bannerList.forEach((bannerItem: any) => {
    // 根据当前状态，修改 props
    bannerItem.props.isPhone = false
    bannerItem.props.bannerImg = bannerItem.props.pcLightBannerImg
  })

}



function changeTimeLineVerticalToPcAndLight(componentTree: any) {
  let timeLineVerticalList = findComponentByName("TimeLineVertical", componentTree)
  timeLineVerticalList.forEach((timeLineVerticalItem: any) => {
    // 根据当前状态，修改 props
    timeLineVerticalItem.props.isPhone = false
  })
}

function changeNewCardToPcAndLight(componentTree: any) {
  let newCardList = findComponentByName("NewCard", componentTree)
  newCardList.forEach((newCardItem: any) => {
    // 根据当前状态，修改 props
    newCardItem.props.isPhone = true
  })
}

function changeFAQSToPcAndLight(componentTree: any) {
  let componentList = findComponentByName("FAQS", componentTree)
  componentList.forEach((component: any) => {
    // 根据当前状态，修改 props
    component.props.isDark = false
  })
}


export const saveSchema = async (scenarioName: string = 'unknown') => {


  let localSchemaData = getLocalSchema()



  let searchParamas = window.location.search
  let searchParmasObj = new URLSearchParams(searchParamas)

  let schemaId = searchParmasObj.get('schema-id')

  if(!schemaId){
    Message.notice("正在保存到远端数据")

    // 创建操作
    const createRes = await createSchemaRequest({schemaData: localSchemaData})
    console.log('createRes', createRes);
    const {data: createedSchemaid}  = createRes

    var originalUrl = window.location.href;
    var searchObj = { ['schema-id']: createedSchemaid };
    var searchParams = new URLSearchParams(searchObj);
    var newUrl = originalUrl + '?' + searchParams.toString();
    window.history.pushState({ path: newUrl }, '', newUrl);
    Message.success('成功保存到云端');

  } else {
    Message.notice("正在将修改保存到远端")

    let localSchemaDataObj = JSON.parse(localSchemaData)
    // 在修改之前，需要将schema数据修改为  pc + light
    const componentTree = localSchemaDataObj.componentsTree[0]
    changeComponentToPcAndLight(componentTree)

    // 更新操作
    const updateRes = await updateSchemaRequest({schemaId, schemaData: JSON.stringify(localSchemaDataObj)})

    Message.success("保存到远端数据成功")
  }



  // window.history.pushState({ path: updatedUrl }, '', updatedUrl);

  // setProjectSchemaToLocalStorage(scenarioName);
  // await setPackagesToLocalStorage(scenarioName);
  // Message.success('成功保存到本地');
};

export const copySchema = async ()=>{
  // 1. 复制scheme
  // 2. 调用 添加功能， 通过 window.open 新开一个页面
  let localSchemaData = getLocalSchema()

  Message.notice("正在复制当前数据到新页面")

  let localSchemaDataObj = JSON.parse(localSchemaData)
  // 复制的时候，和保存操作一样，只保存 pc+ light 的数据
  const componentTree = localSchemaDataObj.componentsTree[0]
  changeComponentToPcAndLight(componentTree)

  // 创建操作
  const createRes = await createSchemaRequest({schemaData: JSON.stringify(localSchemaDataObj)})
  const {data: createedSchemaid}  = createRes

  // 获取当前页面的URL
  var url = new URL(window.location.href);
// 获取查询参数对象
  var searchParams = url.searchParams;
// 更新查询参数
  let schemeSearchId = searchParams.get('schema-id');
  searchParams.set('schema-id', createedSchemaid);
  url.search = searchParams.toString();
  Message.success('成功保存到云端');

  window.open(url)


}

export const resetSchema = async (scenarioName: string = 'unknown') => {
  try {
    await new Promise<void>((resolve, reject) => {
      Dialog.confirm({
        content: '确定要重置吗？您所有的修改都将消失！',
        onOk: () => {
          resolve();
        },
        onCancel: () => {
          reject()
        },
      })
    })
  } catch(err) {
    return;
  }
  const defaultSchema = generateProjectSchema(DefaultPageSchema, DefaultI18nSchema);

  project.importSchema(defaultSchema as any);
  project.simulatorHost?.rerender();

  setProjectSchemaToLocalStorage(scenarioName);
  await setPackagesToLocalStorage(scenarioName);
  Message.success('成功重置页面');
}

const getLSName = (scenarioName: string, ns: string = 'projectSchema') => `${scenarioName}:${ns}`;

export const getProjectSchemaFromLocalStorage = async  (scenarioName: string) => {

  const searchParams = new URLSearchParams(window.location.search);
  const schemaId = searchParams.get('schema-id')

  if(!schemaId){
    // url 没有schemaId ,正常情况下，用户界面不会走到这个逻辑
    if (!scenarioName) {
      console.error('scenarioName is required!');
      return;
    }
    const localValue = window.localStorage.getItem(getLSName(scenarioName));
    if (localValue) {
      return JSON.parse(localValue);
    }
    Message.error('url错误，请联系开发人员')
    return undefined;

  } else {
    Message.notice('正在获取云端数据');
    const resp = await getSchemaRequest({schemaId})
    Message.success('获取云端数据成功');

    console.log('JSON.parse(resp.data.schema_data)', JSON.parse(resp.data.schema_data));
    //
    // @ts-ignore
    return JSON.parse(resp.data.schema_data)


    // console.log('mockSchemaData', mockSchemaData);
    // return mockSchemaData
  }
  //
  // if (!scenarioName) {
  //   console.error('scenarioName is required!');
  //   return;
  // }
  // const localValue = window.localStorage.getItem(getLSName(scenarioName));
  // if (localValue) {
  //   return JSON.parse(localValue);
  // }
  // return undefined;
}

const setProjectSchemaToLocalStorage = (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  window.localStorage.setItem(
    getLSName(scenarioName),
    JSON.stringify(project.exportSchema(IPublicEnumTransformStage.Save))
  );
}

const setPackagesToLocalStorage = async (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  const packages = await filterPackages(material.getAssets().packages);
  window.localStorage.setItem(
    getLSName(scenarioName, 'packages'),
    JSON.stringify(packages),
  );
}

export const getPackagesFromLocalStorage = (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  return JSON.parse(window.localStorage.getItem(getLSName(scenarioName, 'packages')) || '{}');
}

export const getProjectSchema = async (scenarioName: string = 'unknown') : Promise<IPublicTypeProjectSchema> => {
  const pageSchema = await getPageSchema(scenarioName);
  return generateProjectSchema(pageSchema, DefaultI18nSchema);
};

export const getPageSchema = async (scenarioName: string = 'unknown') => {
  // const pageSchema = await getProjectSchemaFromLocalStorage(scenarioName)?.componentsTree?.[0];
  const pageSchemaResp = await  getProjectSchemaFromLocalStorage(scenarioName)
  const pageSchema = pageSchemaResp?.componentsTree?.[0];


  if (pageSchema) {
    return pageSchema;
  }

  return DefaultPageSchema;
};

export const getPreviewLocale = (scenarioName: string) => {
  const key = getLSName(scenarioName, 'previewLocale');
  return window.localStorage.getItem(key) || 'zh-CN';
}

export const setPreviewLocale = (scenarioName: string, locale: string) => {
  const key = getLSName(scenarioName, 'previewLocale');
  window.localStorage.setItem(key, locale || 'zh-CN');
  window.location.reload();
}
