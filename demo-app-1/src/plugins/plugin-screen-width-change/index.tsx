import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Select } from '@alifd/next';
import _ from 'lodash'
import {useSpecialImgByUserSelect} from "../plugin-simulator-locale";

const PHONE_SIZE = '375'

function setIsPhoneTrue(tree: any) {
  if (_.isObject(tree)) {
    if (_.has(tree, 'props') && _.has(tree.props, 'isPhone')) {
      tree.props.isPhone = true;
    }
    if (_.isArray(tree.children)) {
      _.forEach(tree.children, function(child) {
        setIsPhoneTrue(child);
      });
    }
  }
}

const Option = Select.Option;
export interface IProps {
  currentLocale: string;
  onChange: (value: string) => void;
}

const ScreenWidthSelect: React.FC<IProps> = (props): React.ReactElement => {
  const { currentLocale, onChange } = props;
  const currentLocaleValue = '100'
  return (
    <div className="lowcode-plugin-simulator-locale-select">
        <Select
          id="select"
          onChange={onChange}
          defaultValue={currentLocaleValue}
          style={{marginRight: 8}}
        >
          <Option value="100">跟随页面宽度</Option>
        <Option value="1920">1920</Option>
        <Option value="1440">1440</Option>
        <Option value={`${PHONE_SIZE}`}>{PHONE_SIZE}</Option>
      </Select>
    </div>
  );
};
// 画布区域语言切换
const ScreenWidthChangePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { project, skeleton } = ctx;

      const currentLocale = project.simulatorHost?.get('locale') || 'zh-CN';
      const onLocaleChange = (value: string): void => {

        // 切换移动端和pc端，需要完成两件事情
        // 1. 修改 css 样式
        // 2. 通过 schema.componentsTree[0]，设置不同的props 给 SEO 组件

        let iframe = document.querySelector('.lc-simulator-content-frame')
        if (Number(value) === 100) {
          iframe.style.width = `100%`

          window.gateIsPhone = false
        } else {
          iframe.style.width = `${value}px`
          if (Number(value) === Number(PHONE_SIZE)) {
            // const schema = window.schemaFromNetWord
            // const copySchema = JSON.parse(JSON.stringify(schema))
            // setIsPhoneTrue(copySchema.componentsTree[0])
            // project.importSchema(copySchema as any);
            window.gateIsPhone = true
          } else {
            window.gateIsPhone = false
          }

        }

        useSpecialImgByUserSelect(project)

      }
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'screenWidthChangePlugin',
        content: <ScreenWidthSelect currentLocale={currentLocale} onChange={onLocaleChange} />,
        props: {
          align: 'center',
        },
      });
    },
  };
}
ScreenWidthChangePlugin.pluginName = 'ScreenWidthChangePlugin';
ScreenWidthChangePlugin.meta = {
};
export default ScreenWidthChangePlugin;
