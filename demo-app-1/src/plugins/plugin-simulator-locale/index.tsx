import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Select } from '@alifd/next';
import {IPublicApiProject} from "@alilc/lowcode-types/lib/shell/api";
import _ from 'lodash'
import {getLocalSchema} from "../../services/mockService";
export interface IProps {
  currentLocale: string;
  onChange: (value: string) => void;
}

const Option = Select.Option;

export function getCopySchema(){
  const currentSchema = getLocalSchema()
  const copySchema = JSON.parse((currentSchema))
  const componentTree = copySchema.componentsTree[0]
  return {componentTree, copySchema}
}

export function findComponentByName(name, data) {
  let result = [];

  if (data.componentName === name) {
    result.push(data);
  }

  if (data.children) {
    for (let i = 0; i < data.children.length; i++) {
      const childResult = findComponentByName(name, data.children[i]);
      if (childResult.length > 0) {
        result = result.concat(childResult);
      }
    }
  }

  return result;
}

export function changeComponentProps(componentTree: any){
  // 如果组件有pc or 移动端 需要修改的样式，改这里 changeComponentProps  changeComponentToPcAndLight
  changeBannerProps(componentTree)
  changeTimeLineVerticalProps(componentTree)
  changeNewCardProps(componentTree)
  changeFAQSProps(componentTree)
}

function changeBannerProps(componentTree: any) {
  let bannerList = findComponentByName("Banner", componentTree)

  if (!window.gateIsPhone && !window.gateIsDark) {
    // pc + light
    bannerList.forEach((bannerItem: any) => {
      // 根据当前状态，修改 props
      bannerItem.props.isPhone = false
      bannerItem.props.bannerImg = bannerItem.props.pcLightBannerImg
    })
  }
  if (!window.gateIsPhone && window.gateIsDark) {
    // pc + dark
    bannerList.forEach((bannerItem: any) => {
      // 根据当前状态，修改 props
      bannerItem.props.isPhone = false
      bannerItem.props.bannerImg = bannerItem.props.pcDarkBannerImg
    })
  }
  if (window.gateIsPhone && !window.gateIsDark) {
    // h5 + light
    bannerList.forEach((bannerItem: any) => {
      // 根据当前状态，修改 props
      bannerItem.props.isPhone = true
      bannerItem.props.bannerImg = bannerItem.props.h5LightBannerImg
    })
  }
  if (window.gateIsPhone && window.gateIsDark) {
    // h5 + dark
    bannerList.forEach((bannerItem: any) => {
      // 根据当前状态，修改 props
      bannerItem.props.isPhone = true
      bannerItem.props.bannerImg = bannerItem.props.h5DarkBannerImg
    })
  }

}

function changeTimeLineVerticalProps(componentTree: any) {
  let timeLineVerticalList = findComponentByName("TimeLineVertical", componentTree)


  if (!window.gateIsPhone && !window.gateIsDark) {
    // pc + light
    timeLineVerticalList.forEach((timeLineVerticalItem: any) => {
      // 根据当前状态，修改 props
      timeLineVerticalItem.props.isPhone = false
    })
  }
  if (!window.gateIsPhone && window.gateIsDark) {
    // pc + dark
    timeLineVerticalList.forEach((timeLineVerticalItem: any) => {
      // 根据当前状态，修改 props
      timeLineVerticalItem.props.isPhone = false
    })
  }
  if (window.gateIsPhone && !window.gateIsDark) {
    // h5 + light
    timeLineVerticalList.forEach((timeLineVerticalItem: any) => {
      // 根据当前状态，修改 props
      timeLineVerticalItem.props.isPhone = true
    })
  }
  if (window.gateIsPhone && window.gateIsDark) {
    // h5 + dark
    timeLineVerticalList.forEach((timeLineVerticalItem: any) => {
      // 根据当前状态，修改 props
      timeLineVerticalItem.props.isPhone = true
    })
  }

}

function changeNewCardProps(componentTree: any) {
  let newCardList = findComponentByName("NewCard", componentTree)

  if (!window.gateIsPhone && !window.gateIsDark) {
    // pc + light
    newCardList.forEach((newCardItem: any) => {
      // 根据当前状态，修改 props
      newCardItem.props.isPhone = false
    })
  }
  if (!window.gateIsPhone && window.gateIsDark) {
    // pc + dark
    newCardList.forEach((newCardItem: any) => {
      // 根据当前状态，修改 props
      newCardItem.props.isPhone = false
    })
  }
  if (window.gateIsPhone && !window.gateIsDark) {
    // h5 + light
    newCardList.forEach((newCardItem: any) => {
      // 根据当前状态，修改 props
      newCardItem.props.isPhone = true
    })
  }
  if (window.gateIsPhone && window.gateIsDark) {
    // h5 + dark
    newCardList.forEach((newCardItem: any) => {
      // 根据当前状态，修改 props
      newCardItem.props.isPhone = true
    })
  }

}

function changeFAQSProps(componentTree: any) {
  let componentList = findComponentByName("FAQS", componentTree)

  if (!window.gateIsPhone && !window.gateIsDark) {
    // pc + light
  }
  if (!window.gateIsPhone && window.gateIsDark) {
    // pc + dark
    componentList.forEach((conmponentItem: any) => {
      // 根据当前状态，修改 props
      conmponentItem.props.isDark = true
    })
  }
  if (window.gateIsPhone && !window.gateIsDark) {
    // h5 + light

  }
  if (window.gateIsPhone && window.gateIsDark) {
    // h5 + dark
    componentList.forEach((newCardItem: any) => {
      // 根据当前状态，修改 props
      newCardItem.props.isDark = true
    })
  }

}



// 根据用户选择的『亮暗』 + 『pc h5端』，为组件的图片属性设置值
export function useSpecialImgByUserSelect(project: IPublicApiProject){

  console.log('window.gateIsPhone, window.gateIsDark', window.gateIsPhone, window.gateIsDark);

  const {componentTree, copySchema} = getCopySchema()

  // todo 优化空间
  // 以下是在切换过程中，需要修改props的组件
  changeComponentProps(componentTree)
  project.importSchema(copySchema)
}

const LocaleSelect: React.FC<IProps> = (props): React.ReactElement => {
  const { currentLocale, onChange } = props;
  const currentLocaleValue = '亮色模式'
  return (
    <div className="lowcode-plugin-simulator-locale-select">
        <Select
          id="select"
          onChange={onChange}
          defaultValue={currentLocaleValue}
          aria-label="切换画布区域 locale"
          style={{marginRight: 8}}
        >
        <Option value="light">亮色模式</Option>
        <Option value="dark">暗色模式</Option>
      </Select>
    </div>
  );
};
// 画布区域语言切换
const SimulatorLocalePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { project, skeleton } = ctx;
      const currentLocale = project.simulatorHost?.get('locale') || 'zh-CN';
      const onLocaleChange = (value: string): void => {
        let iframe = document.querySelector('.lc-simulator-content-frame')
        let iframeHTMLDOM = iframe.contentDucument || iframe.contentWindow.document
        let body = iframeHTMLDOM.querySelector('.engine-document')
        let appContainer = body.querySelector("#app")
        let addTemplateButton = body.querySelector('.lc-container-placeholder')


        if(value === 'light'){
          body.classList.remove('classic-dark')
          appContainer.style.background = '#FFFFFF'
          window.gateIsDark = false
          addTemplateButton.style.backgroundColor = '#f0f0f0'




        } else if (value === 'dark'){
          body.classList.add('classic-dark')
          appContainer.style.background = '#151926'
          window.gateIsDark = true
          // 手动修改阿里低代码平台的样式
          addTemplateButton.style.backgroundColor = '#9FA5AC'



        }
        useSpecialImgByUserSelect(project)
      }
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'simulatorLocale',
        content: <LocaleSelect currentLocale={currentLocale} onChange={onLocaleChange} />,
        props: {
          align: 'center',
        },
      });
    },
  };
}
SimulatorLocalePlugin.pluginName = 'SimulatorLocalePlugin';
SimulatorLocalePlugin.meta = {
};
export default SimulatorLocalePlugin;
