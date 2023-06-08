
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialDirList, initialSiderBarProps} from "../../src/components/SlideBar";

const SlideBarMeta: ComponentMetadata = {
  "componentName": "SlideBar",
  "title": "SlideBar",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "SlideBar",
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
            "en-US": "dirList",
            "zh-CN": "dirList"
          }
        },
        "name": "dirList",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
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
                        "initialValue": ""
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "active",
                          "zh-CN": "active"
                        }
                      },
                      "name": "active",
                      "setter": {
                        "componentName": "BoolSetter",
                        "isRequired": true,
                        "initialValue": false
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
                        "initialValue": ""
                      }
                    }
                  ],
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
                  }
                }
              }
            }
          },
          "isRequired": true,
          "initialValue": initialDirList
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
    "title": "导航栏",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/11-time-line.jpg",
    "schema": {
      "componentName": "SlideBar",
      "props": {}
    }
  }
];

export default {
  ...SlideBarMeta,
  snippets
};
