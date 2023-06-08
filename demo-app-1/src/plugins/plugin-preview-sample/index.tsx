import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button } from '@alifd/next';
import {
  saveSchema,
} from '../../services/mockService';

// 保存功能示例
const PreviewSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const doPreview = () => {

        let dom1 = document.querySelector('.lc-right-area')
        let dom2 = document.querySelector('.lc-left-area')
        let dom3 = document.querySelector('.lc-simulator-canvas')

        if(dom1 && dom2 && dom3){
          const computedStyle = window.getComputedStyle(dom1);
          const display = computedStyle.getPropertyValue('display');
          if(display !== 'none'){
            // 需要将 dom1, dom2, dom3 设置为预览css
            dom1.setAttribute('style', 'display: none');
            dom2.setAttribute('style', 'display: none');
            dom3.setAttribute('style', 'left: 0; right: 0');

          } else {
            // 需要将 dom1, dom2, dom3 设置为不预览css
            dom1.setAttribute('style', 'display: block');
            dom2.setAttribute('style', 'display: flex');
            dom3.setAttribute('style', 'left: 16px; right: 16px');
          }
        }




        // const scenarioName = config.get('scenarioName');
        // saveSchema(scenarioName);
        // setTimeout(() => {
        //   const search = location.search ? `${location.search}&scenarioName=${scenarioName}` : `?scenarioName=${scenarioName}`;
        //   window.open(`./preview.html${search}`);
        // }, 500);
      };
      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" onClick={() => doPreview()}>
            预览
          </Button>
        ),
      });
    },
  };
}
PreviewSamplePlugin.pluginName = 'PreviewSamplePlugin';
PreviewSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default PreviewSamplePlugin;
