
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialBannerProps, pcLightBannerImg, pcDarkBannerImg, h5LightBannerImg, h5DarkBannerImg} from "../../src/components/Banner/types";

const BannerMeta: ComponentMetadata = {
  "componentName": "Banner",
  "title": "Banner",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "Banner",
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
            "en-US": "isPhone",
            "zh-CN": "isPhone"
          }
        },
        "name": "isPhone",
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
            "en-US": "newsList",
            "zh-CN": "newsList"
          }
        },
        "name": "newsList",
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
                          "en-US": "author",
                          "zh-CN": "author"
                        }
                      },
                      "name": "author",
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
                          "en-US": "author_id",
                          "zh-CN": "author_id"
                        }
                      },
                      "name": "author_id",
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
                          "en-US": "cate",
                          "zh-CN": "cate"
                        }
                      },
                      "name": "cate",
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
                          "en-US": "cate_str",
                          "zh-CN": "cate_str"
                        }
                      },
                      "name": "cate_str",
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
                          "en-US": "id",
                          "zh-CN": "id"
                        }
                      },
                      "name": "id",
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
                          "en-US": "updated_d",
                          "zh-CN": "updated_d"
                        }
                      },
                      "name": "updated_d",
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
                          "en-US": "updated_t",
                          "zh-CN": "updated_t"
                        }
                      },
                      "name": "updated_t",
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
                          "en-US": "views",
                          "zh-CN": "views"
                        }
                      },
                      "name": "views",
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
          "initialValue": initialBannerProps.newsList
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "BannerTitleList",
            "zh-CN": "BannerTitleList"
          }
        },
        "name": "BannerTitleList",
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
          "initialValue": initialBannerProps.BannerTitleList
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bannerImg",
            "zh-CN": "bannerImg"
          }
        },
        "name": "bannerImg",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": pcLightBannerImg
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pcLightBannerImg",
            "zh-CN": "pcLightBannerImg"
          }
        },
        "name": "pcLightBannerImg",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": pcLightBannerImg
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pcDarkBannerImg",
            "zh-CN": "pcDarkBannerImg"
          }
        },
        "name": "pcDarkBannerImg",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": pcDarkBannerImg
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "h5LightBannerImg",
            "zh-CN": "h5LightBannerImg"
          }
        },
        "name": "h5LightBannerImg",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": h5LightBannerImg
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "h5DarkBannerImg",
            "zh-CN": "h5DarkBannerImg"
          }
        },
        "name": "h5DarkBannerImg",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": h5DarkBannerImg
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
          "initialValue": initialBannerProps.title
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "subTitle",
            "zh-CN": "subTitle"
          }
        },
        "name": "subTitle",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": initialBannerProps.subTitle
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
    "title": "头部组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/02-banner.jpg",
    "schema": {
      "componentName": "Banner",
      "props": {}
    }
  }
];

export default {
  ...BannerMeta,
  snippets
};
