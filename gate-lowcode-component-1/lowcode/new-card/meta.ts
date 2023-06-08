
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialNewCardProps} from "../../src/components/NewCard";

const NewCardMeta: ComponentMetadata = {
  "componentName": "NewCard",
  "title": "NewCard",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "NewCard",
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
          "initialValue": initialNewCardProps.title
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
            "en-US": "newsList",
            "zh-CN": "newsList"
          }
        },
        "name": "newsList",
        "setter": {
          "componentName": "NewCardListSetter",
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
                          "en-US": "abstract",
                          "zh-CN": "abstract"
                        }
                      },
                      "name": "abstract",
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
                          "en-US": "brief",
                          "zh-CN": "brief"
                        }
                      },
                      "name": "brief",
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
                          "en-US": "imgurl",
                          "zh-CN": "imgurl"
                        }
                      },
                      "name": "imgurl",
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
                          "en-US": "news_img",
                          "zh-CN": "news_img"
                        }
                      },
                      "name": "news_img",
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
                          "en-US": "news_url",
                          "zh-CN": "news_url"
                        }
                      },
                      "name": "news_url",
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
                          "en-US": "release_time",
                          "zh-CN": "release_time"
                        }
                      },
                      "name": "release_time",
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
                          "en-US": "source",
                          "zh-CN": "source"
                        }
                      },
                      "name": "source",
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
          "initialValue": initialNewCardProps.newsList
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
          "componentName": "MixedSetter",
          "isRequired": true,
          "props": {}
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
    "title": "新闻列表",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/10-news-card.jpg",
    "schema": {
      "componentName": "NewCard",
      "props": {}
    }
  }
];

export default {
  ...NewCardMeta,
  snippets
};
