
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialArticleProps} from "../../src/components/Article";

const ArticleMeta: ComponentMetadata = {
  "componentName": "Article",
  "title": "Article",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.9",
    "exportName": "Article",
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
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialArticleProps.title
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "imgAlt",
            "zh-CN": "imgAlt"
          }
        },
        "name": "imgAlt",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "subTitle",
            "zh-CN": "subTitle"
          }
        },
        "name": "subTitle",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialArticleProps.subTitle
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "imgUrl",
            "zh-CN": "imgUrl"
          }
        },
        "name": "imgUrl",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialArticleProps.imgUrl
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "subTitle2",
            "zh-CN": "subTitle2"
          }
        },
        "name": "subTitle2",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialArticleProps.id
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
  category: "内容展示"
};
const snippets: Snippet[] = [
  {
    "title": "图文组件",
    "description": "",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/01-article.jpg",
    "schema": {
      "componentName": "Article",
      "props": {}
    },
  }
];

export default {
  ...ArticleMeta,
  snippets
};
