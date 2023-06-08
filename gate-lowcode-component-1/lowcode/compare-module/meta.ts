
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialCompareModuleProps} from "../../src/components/CompareModule";

const CompareModuleMeta: ComponentMetadata = {
  "componentName": "CompareModule",
  "title": "CompareModule",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.10",
    "exportName": "CompareModule",
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
            "en-US": "compareData",
            "zh-CN": "compareData"
          }
        },
        "name": "compareData",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "a",
                      "zh-CN": "a"
                    }
                  },
                  "name": "a",
                  "setter": {
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
                              "initialValue": initialCompareModuleProps.compareData.a.title

                            }
                          },
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
                              "componentName": "CompareItemSetter",
                              "props": {
                                "itemSetter": {
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
                                                "componentName": "RadioGroupSetter",
                                                "props": {
                                                  "dataSource": [
                                                    {
                                                      "label": "yes",
                                                      "value": "yes"
                                                    },
                                                    {
                                                      "label": "no",
                                                      "value": "no"
                                                    }
                                                  ],
                                                  "options": [
                                                    {
                                                      "label": "yes",
                                                      "value": "yes"
                                                    },
                                                    {
                                                      "label": "no",
                                                      "value": "no"
                                                    }
                                                  ]
                                                },
                                                "isRequired": true,
                                                "initialValue": "yes"
                                              }
                                            },
                                            {
                                              "title": {
                                                "label": {
                                                  "type": "i18n",
                                                  "en-US": "context",
                                                  "zh-CN": "context"
                                                }
                                              },
                                              "name": "context",
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
                                  "initialValue": []
                                }
                              },
                              "isRequired": true,
                              "initialValue": initialCompareModuleProps.compareData.a.list
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          "isRequired": false,
                          "props": {}
                        }
                      }
                    },
                    "isRequired": true,
                    "initialValue": initialCompareModuleProps.compareData.a
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "b",
                      "zh-CN": "b"
                    }
                  },
                  "name": "b",
                  "setter": {
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
                              "initialValue": initialCompareModuleProps.compareData.b.title
                            }
                          },
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
                              "componentName": "ArraySetter",
                              "props": {
                                "itemSetter": {
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
                                                "componentName": "RadioGroupSetter",
                                                "props": {
                                                  "dataSource": [
                                                    {
                                                      "label": "yes",
                                                      "value": "yes"
                                                    },
                                                    {
                                                      "label": "no",
                                                      "value": "no"
                                                    }
                                                  ],
                                                  "options": [
                                                    {
                                                      "label": "yes",
                                                      "value": "yes"
                                                    },
                                                    {
                                                      "label": "no",
                                                      "value": "no"
                                                    }
                                                  ]
                                                },
                                                "isRequired": true,
                                                "initialValue": "yes"
                                              }
                                            },
                                            {
                                              "title": {
                                                "label": {
                                                  "type": "i18n",
                                                  "en-US": "context",
                                                  "zh-CN": "context"
                                                }
                                              },
                                              "name": "context",
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
                                  "initialValue": []
                                }
                              },
                              "isRequired": true,
                              "initialValue": initialCompareModuleProps.compareData.b.list

                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          "isRequired": false,
                          "props": {}
                        }
                      }
                    },
                    "isRequired": true,
                    "initialValue": initialCompareModuleProps.compareData.b
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "vsIcon",
                      "zh-CN": "vsIcon"
                    }
                  },
                  "name": "vsIcon",
                  "setter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
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
          },
          "isRequired": true,
          "initialValue": initialCompareModuleProps
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
    "title": "对比组件",
    "screenshot": "https://www.sesametest.co:8080/static_pages/ali-lowcode/screenshot/05-compare-classic.jpg",
    "schema": {
      "componentName": "CompareModule",
      "props": {}
    }
  }
];

export default {
  ...CompareModuleMeta,
  snippets
};
