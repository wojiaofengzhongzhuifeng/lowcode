
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialCardContentList} from "../../src/components/CardContentButton/types";

const CardContentButtonMeta: ComponentMetadata = {
  "componentName": "CardContentButton",
  "title": "CardContentButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "CardContentButton",
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
            "en-US": "CardContentList",
            "zh-CN": "CardContentList"
          }
        },
        "name": "CardContentList",
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
                          "en-US": "description",
                          "zh-CN": "description"
                        }
                      },
                      "name": "description",
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
                          "en-US": "button",
                          "zh-CN": "button"
                        }
                      },
                      "name": "button",
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
                                        "en-US": "buttonName",
                                        "zh-CN": "buttonName"
                                      }
                                    },
                                    "name": "buttonName",
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
                                        "en-US": "url",
                                        "zh-CN": "url"
                                      }
                                    },
                                    "name": "url",
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
          "initialValue": initialCardContentList
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
    "title": "卡片+按钮组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/13-card-content-button.jpg",
    "schema": {
      "componentName": "CardContentButton",
      "props": {}
    }
  }
];

export default {
  ...CardContentButtonMeta,
  snippets
};
