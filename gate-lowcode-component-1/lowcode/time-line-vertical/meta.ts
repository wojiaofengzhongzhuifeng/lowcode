
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialTimeLineVerticalProps} from "../../src/components/TimeLineVertical/types";

const TimeLineVerticalMeta: ComponentMetadata = {
  "componentName": "TimeLineVertical",
  "title": "TimeLineVertical",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "TimeLineVertical",
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
          "initialValue": initialTimeLineVerticalProps.title
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isPhone",
            "zh-CN": "isPhone"
          }
        },
        "name": "isPhone",
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
            "en-US": "timeData",
            "zh-CN": "timeData"
          }
        },
        "name": "timeData",
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
                          "en-US": "time",
                          "zh-CN": "time"
                        }
                      },
                      "name": "time",
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
          "initialValue": initialTimeLineVerticalProps.timeData
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
          "initialValue": initialTimeLineVerticalProps.id
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
    "title": "时间轴",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/11-time-line.jpg",

    "schema": {
      "componentName": "TimeLineVertical",
      "props": {}
    }
  }
];

export default {
  ...TimeLineVerticalMeta,
  snippets
};
