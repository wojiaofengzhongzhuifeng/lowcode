import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import {Dropdown, Menu, Message, Button} from '@alifd/next';
import './index.scss';
import {createSchemaRequest, getSchemaRequest} from "../../services/request";

export interface IProps {
  logo?: string;
  href?: string;
  scenarioInfo?: any;
  scenarioDisplayName?: string;
}

const Logo: React.FC<IProps> = (props): React.ReactElement => {
  const { scenarioDisplayName, scenarioInfo } = props;
  const urls = scenarioInfo?.urls || [];
  return (
    <div className="lowcode-plugin-logo">
      {/*<a className="logo" target="blank" href={props.href || 'https://lowcode-engine.cn'} style={{ backgroundImage: `url(${props.logo})` }} />*/}
      {/*<div className="scenario-name">{scenarioDisplayName}</div>*/}
      {
      urls && (
        <Dropdown
          className="info-dropdown"
          trigger={(
            <Button type={'primary'}>{scenarioDisplayName}</Button>
            // <div className="scenario-name">{scenarioDisplayName}</div>
            // <img
            //   style={{
            //     height: '18px',
            //     position: 'relative',
            //     top: '-2px',
            //   }}
            //   src="https://img.alicdn.com/imgextra/i4/O1CN013upU1R1yl5wVezP8k_!!6000000006618-2-tps-512-512.png"
            // />
          )}
          triggerType="click"
        >
          <Menu
            onItemClick={async (key, item) => {
              console.log('key', key);
              Message.notice('正在为您创建模版，请稍等')
              const resp = await getSchemaRequest({schemaId: '48'})
              console.log(resp);
              console.log('resp.schema_data', resp.data.schema_data);

              const createResp = await createSchemaRequest({schemaData: resp.data.schema_data})

              Message.success('创建模版成功')

              // 获取当前页面的URL
              var url = new URL(window.location.href);
              var searchParams = url.searchParams;
              let schemeSearchId = searchParams.get('schema-id');
              searchParams.set('schema-id', createResp.data);
              url.search = searchParams.toString();

              window.open(url)
            }}
          >
            {
              urls.map((url: any) => <Menu.Item key={url.value}>{url.key}</Menu.Item>)
            }
          </Menu>
        </Dropdown>
      )
    }
    </div>
  );
};
// 示例 Logo widget
const LogoSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const scenarioDisplayName = config.get('scenarioDisplayName');
      const scenarioInfo = config.get('scenarioInfo');
      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo scenarioDisplayName={scenarioDisplayName} scenarioInfo={scenarioInfo}  />,
        contentProps: {
          logo: 'https://www.gate.io/images/logo/open_sesame_light.png?v=4',
          href: 'https://www.gate.io/',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
}
LogoSamplePlugin.pluginName = 'LogoSamplePlugin';
LogoSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default LogoSamplePlugin;
