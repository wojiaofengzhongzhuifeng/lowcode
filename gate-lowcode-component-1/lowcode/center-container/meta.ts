
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CenterContainerMeta: ComponentMetadata = {
  "componentName": "CenterContainer",
  "title": "CenterContainer",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "CenterContainer",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "selfClassName",
            "zh-CN": "selfClassName"
          }
        },
        "name": "selfClassName",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {
      // 新增，设置组件为容器组件，可拖入组件
      isContainer: true,
    }
  },
  group: "业务组件",
  category: "容器"
};
const snippets: Snippet[] = [
  {
    "title": "安全区域容器",
    "screenshot": "",
    "schema": {
      "componentName": "CenterContainer",
      "props": {}
    }
  }
];

export default {
  ...CenterContainerMeta,
  snippets
};
