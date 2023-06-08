
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialFaqList, initialFAQTitle} from "../../src/components/FAQs";

const FAQSMeta: ComponentMetadata = {
  "componentName": "FAQS",
  "title": "FAQS",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.8",
    "exportName": "FAQS",
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
          "isRequired": false,
          "initialValue": initialFAQTitle
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "FaqList",
            "zh-CN": "FaqList"
          }
        },
        "name": "FaqList",
        "setter": {
          "componentName": "FAQInputSetter",
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
                          "en-US": "contentList",
                          "zh-CN": "contentList"
                        }
                      },
                      "name": "contentList",
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
                          "en-US": "isShow",
                          "zh-CN": "isShow"
                        }
                      },
                      "name": "isShow",
                      "setter": {
                        "componentName": "BoolSetter",
                        "isRequired": true,
                        "initialValue": false
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
          "initialValue": initialFaqList
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isDark",
            "zh-CN": "isDark"
          }
        },
        "name": "isDark",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
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
          "isRequired": false,
          "initialValue": "id-test"
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
    "title": "问答",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/07-faq.jpg",
    "schema": {
      "componentName": "FAQS",
      "props": {}
    }
  },

];

export default {
  ...FAQSMeta,
  snippets
};
