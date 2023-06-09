
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialCardPictureContentProps} from "../../src/components/CardPictureContent/types";

const CardPictureContentMeta: ComponentMetadata = {
  "componentName": "CardPictureContent",
  "title": "CardPictureContent",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.18",
    "exportName": "CardPictureContent",
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
            "en-US": "CardPictureContentList",
            "zh-CN": "CardPictureContentList"
          }
        },
        "name": "CardPictureContentList",
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
                          "en-US": "ImagesAlt",
                          "zh-CN": "ImagesAlt"
                        }
                      },
                      "name": "ImagesAlt",
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
                          "en-US": "listA",
                          "zh-CN": "listA"
                        }
                      },
                      "name": "listA",
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
                                        "en-US": "icon",
                                        "zh-CN": "icon"
                                      }
                                    },
                                    "name": "icon",
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
                                        "en-US": "iconType",
                                        "zh-CN": "iconType"
                                      }
                                    },
                                    "name": "iconType",
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
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "listB",
                          "zh-CN": "listB"
                        }
                      },
                      "name": "listB",
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
                                        "en-US": "icon",
                                        "zh-CN": "icon"
                                      }
                                    },
                                    "name": "icon",
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
                                        "en-US": "iconType",
                                        "zh-CN": "iconType"
                                      }
                                    },
                                    "name": "iconType",
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
                                  },
                                  {
                                    "title": {
                                      "label": {
                                        "type": "i18n",
                                        "en-US": "buttonText",
                                        "zh-CN": "buttonText"
                                      }
                                    },
                                    "name": "buttonText",
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
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "linkText",
                          "zh-CN": "linkText"
                        }
                      },
                      "name": "linkText",
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
                                        "en-US": "text",
                                        "zh-CN": "text"
                                      }
                                    },
                                    "name": "text",
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
                                        "en-US": "linkName",
                                        "zh-CN": "linkName"
                                      }
                                    },
                                    "name": "linkName",
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
          "initialValue": initialCardPictureContentProps.CardPictureContentList
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
          "initialValue": initialCardPictureContentProps.title
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
    "title": "图文 + 交易卡片组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/17-card-picture-content.jpg",
    "schema": {
      "componentName": "CardPictureContent",
      "props": {}
    }
  }
];

export default {
  ...CardPictureContentMeta,
  snippets
};
