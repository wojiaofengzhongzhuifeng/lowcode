
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const DivContainerMeta: ComponentMetadata = {
  "componentName": "DivContainer",
  "title": "DivContainer",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.11",
    "exportName": "DivContainer",
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
            "en-US": "test",
            "zh-CN": "test"
          }
        },
        "name": "test",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {
      isContainer: true
    }
  },
  group: "业务组件",
  category: "容器"
};
const snippets: Snippet[] = [
  {
    "title": "DivContainer",
    "screenshot": "",
    "schema": {
      "componentName": "DivContainer",
      "props": {}
    }
  }
];

export default {
  ...DivContainerMeta,
  snippets
};
