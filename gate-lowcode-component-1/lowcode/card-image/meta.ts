
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialCardImageProps} from "../../src/components/CardImage/types";

const CardImageMeta: ComponentMetadata = {
  "componentName": "CardImage",
  "title": "CardImage",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "CardImage",
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
            "en-US": "CardImageList",
            "zh-CN": "CardImageList"
          }
        },
        "name": "CardImageList",
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
                          "en-US": "Image",
                          "zh-CN": "Image"
                        }
                      },
                      "name": "Image",
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
                          "en-US": "ImageAlt",
                          "zh-CN": "ImageAlt"
                        }
                      },
                      "name": "ImageAlt",
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
                          "en-US": "descriptionList",
                          "zh-CN": "descriptionList"
                        }
                      },
                      "name": "descriptionList",
                      "setter": {
                        "componentName": "ArraySetter",
                        "props": {
                          "itemSetter": {
                            "componentName": "StringSetter",
                            "isRequired": false,
                            "initialValue": ""
                          }
                        },
                        "isRequired": true,
                        "initialValue": []
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
          "initialValue": initialCardImageProps.CardImageList
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
          "initialValue": initialCardImageProps.title
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
    "title": "图片卡片列表组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/15-card-image.jpg",
    "schema": {
      "componentName": "CardImage",
      "props": {}
    }
  }
];

export default {
  ...CardImageMeta,
  snippets
};
