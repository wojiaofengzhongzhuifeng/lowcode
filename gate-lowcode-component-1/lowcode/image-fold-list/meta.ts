
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialImageFoldListProps} from "../../src/components/ImageFoldList";

const ImageFoldListMeta: ComponentMetadata = {
  "componentName": "ImageFoldList",
  "title": "ImageFoldList",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "ImageFoldList",
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
          "initialValue": initialImageFoldListProps.title
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "describe",
            "zh-CN": "describe"
          }
        },
        "name": "describe",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialImageFoldListProps.describe
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "image",
            "zh-CN": "image"
          }
        },
        "name": "image",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialImageFoldListProps.image
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "imageAlt",
            "zh-CN": "imageAlt"
          }
        },
        "name": "imageAlt",
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
            "en-US": "foldListData",
            "zh-CN": "foldListData"
          }
        },
        "name": "foldListData",
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
                          "en-US": "describe",
                          "zh-CN": "describe"
                        }
                      },
                      "name": "describe",
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
          "initialValue": initialImageFoldListProps.foldListData
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
          "initialValue": initialImageFoldListProps.id
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
    "title": "图文列表",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/08-image-folder.jpg",
    "schema": {
      "componentName": "ImageFoldList",
      "props": {}
    }
  }
];

export default {
  ...ImageFoldListMeta,
  snippets
};
