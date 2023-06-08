
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const DisclaimerMeta: ComponentMetadata = {
  "componentName": "Disclaimer",
  "title": "Disclaimer",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "Disclaimer",
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
            "en-US": "a",
            "zh-CN": "a"
          }
        },
        "name": "a",
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
    "component": {}
  },
  group: "业务组件",
  category: "内容展示"
};
const snippets: Snippet[] = [
  {
    "title": "免责声明",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/06-disclaim.jpg",
    "schema": {
      "componentName": "Disclaimer",
      "props": {}
    }
  }
];

export default {
  ...DisclaimerMeta,
  snippets
};
