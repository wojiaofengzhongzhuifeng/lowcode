
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialcardListList, initialCaseItemProps} from "../../src/components/CardListType1";

const CardListType1Meta: ComponentMetadata = {
  "componentName": "CardListType1",
  "title": "CardListType1",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.9",
    "exportName": "CardListType1",
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
            "en-US": "list",
            "zh-CN": "list"
          }
        },
        "name": "list",
        "setter": {
          "componentName": "CardListTypeSetter",
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
                          "en-US": "img",
                          "zh-CN": "img"
                        }
                      },
                      "name": "img",
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
                          "en-US": "content",
                          "zh-CN": "content"
                        }
                      },
                      "name": "content",
                      "setter": {
                        "componentName": "StringSetter",
                        "isRequired": true,
                        "initialValue": initialCaseItemProps.content
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
                        "isRequired": true,
                        "initialValue": initialCaseItemProps.imgAlt
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "href",
                          "zh-CN": "href"
                        }
                      },
                      "name": "href",
                      "setter": {
                        "componentName": "StringSetter",
                        "isRequired": true,
                        "initialValue": initialCaseItemProps.href
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "buttonName",
                          "zh-CN": "buttonName"
                        }
                      },
                      "name": "buttonName",
                      "setter": {
                        "componentName": "StringSetter",
                        "isRequired": true,
                        "initialValue": initialCaseItemProps.buttonName
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "linkType",
                          "zh-CN": "linkType"
                        }
                      },
                      "name": "linkType",
                      "setter": {
                        "componentName": "StringSetter",
                        "isRequired": true,
                        "initialValue": initialCaseItemProps.linkType
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
          "initialValue": [initialCaseItemProps, initialCaseItemProps, initialCaseItemProps]
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dataClickEvent",
            "zh-CN": "dataClickEvent"
          }
        },
        "name": "dataClickEvent",
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
    "title": "图文列表",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/03-card-list-type-1.jpg",
    "schema": {
      "componentName": "CardListType1",
      "props": {}
    }
  }
];

export default {
  ...CardListType1Meta,
  snippets
};
