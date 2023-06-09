
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialImgContentProps} from "../../src/components/ImgContent/types";

const ImgContentMeta: ComponentMetadata = {
  "componentName": "ImgContent",
  "title": "ImgContent",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "ImgContent",
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
            "en-US": "ImgContentList",
            "zh-CN": "ImgContentList"
          }
        },
        "name": "ImgContentList",
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
                          "en-US": "description",
                          "zh-CN": "description"
                        }
                      },
                      "name": "description",
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
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "ImgPosition",
                          "zh-CN": "ImgPosition"
                        }
                      },
                      "name": "ImgPosition",
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
          "initialValue": initialImgContentProps.ImgContentList
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
          "initialValue": initialImgContentProps.title
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
    "title": "图文组件",
    "screenshot": "",
    "schema": {
      "componentName": "ImgContent",
      "props": {}
    }
  }
];

export default {
  ...ImgContentMeta,
  snippets
};
