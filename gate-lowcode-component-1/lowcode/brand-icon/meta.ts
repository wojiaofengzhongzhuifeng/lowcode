
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialBrandIconProps} from "../../src/components/BrandIcon/types";

const BrandIconMeta: ComponentMetadata = {
  "componentName": "BrandIcon",
  "title": "BrandIcon",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "BrandIcon",
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
            "en-US": "BrandIconList",
            "zh-CN": "BrandIconList"
          }
        },
        "name": "BrandIconList",
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
                          "en-US": "Icon",
                          "zh-CN": "Icon"
                        }
                      },
                      "name": "Icon",
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
                          "en-US": "darkIcon",
                          "zh-CN": "darkIcon"
                        }
                      },
                      "name": "darkIcon",
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
                          "en-US": "alt",
                          "zh-CN": "alt"
                        }
                      },
                      "name": "alt",
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
          "initialValue": initialBrandIconProps.BrandIconList
        }
      },
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
          "initialValue": initialBrandIconProps.title
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
    "title": "品牌图标列表组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/12-brand-icon.jpg",
    "schema": {
      "componentName": "BrandIcon",
      "props": {}
    }
  }
];

export default {
  ...BrandIconMeta,
  snippets
};
