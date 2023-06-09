
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialTimelineHorizontalList} from "../../src/components/TimelineHorizontal/types";

const TimelineHorizontalMeta: ComponentMetadata = {
  "componentName": "TimelineHorizontal",
  "title": "TimelineHorizontal",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "TimelineHorizontal",
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
            "en-US": "TimelineHorizontalList",
            "zh-CN": "TimelineHorizontalList"
          }
        },
        "name": "TimelineHorizontalList",
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
                          "en-US": "date",
                          "zh-CN": "date"
                        }
                      },
                      "name": "date",
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
          "initialValue": initialTimelineHorizontalList
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
    "title": "水平时间轴组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/14-timeline-horizontal.jpg",
    "schema": {
      "componentName": "TimelineHorizontal",
      "props": {}
    }
  }
];

export default {
  ...TimelineHorizontalMeta,
  snippets
};
