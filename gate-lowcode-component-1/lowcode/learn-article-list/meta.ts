
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialLearnArticleListProps} from "../../src/components/LearnArticleList";

const LearnArticleListMeta: ComponentMetadata = {
  "componentName": "LearnArticleList",
  "title": "LearnArticleList",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "LearnArticleList",
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
          "initialValue": initialLearnArticleListProps.title
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "learnArticleList",
            "zh-CN": "learnArticleList"
          }
        },
        "name": "learnArticleList",
        "setter": {
          "componentName": "LearnArticleListSetter",
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
                          "en-US": "Images",
                          "zh-CN": "Images"
                        }
                      },
                      "name": "Images",
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
                          "en-US": "tit",
                          "zh-CN": "tit"
                        }
                      },
                      "name": "tit",
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
                          "en-US": "color",
                          "zh-CN": "color"
                        }
                      },
                      "name": "color",
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
                          "en-US": "subtitle",
                          "zh-CN": "subtitle"
                        }
                      },
                      "name": "subtitle",
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
                          "en-US": "href",
                          "zh-CN": "href"
                        }
                      },
                      "name": "href",
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
          "initialValue": initialLearnArticleListProps.learnArticleList
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
          "initialValue": initialLearnArticleListProps.id
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
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/09-learn-article.jpg",

    "schema": {
      "componentName": "LearnArticleList",
      "props": {}
    }
  }
];

export default {
  ...LearnArticleListMeta,
  snippets
};
