
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import {initialRowProps} from "../../src/components/Grid/Row";

const RowMeta: ComponentMetadata = {
  "componentName": "Row",
  "title": "Row",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "gate-lowcode-component",
    "version": "0.2.11",
    "exportName": "Row",
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
            "en-US": "xxl",
            "zh-CN": "xxl"
          }
        },
        "name": "xxl",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.xxl
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "xl",
            "zh-CN": "xl"
          }
        },
        "name": "xl",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.xl
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lg",
            "zh-CN": "lg"
          }
        },
        "name": "lg",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.lg
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "md",
            "zh-CN": "md"
          }
        },
        "name": "md",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.md
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "sm",
            "zh-CN": "sm"
          }
        },
        "name": "sm",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.sm
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "xs",
            "zh-CN": "xs"
          }
        },
        "name": "xs",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.xs
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "span",
            "zh-CN": "span"
          }
        },
        "name": "span",
        "setter": {
          "componentName": "RowSpanNumberInputSetter",
          "props": {
            "itemSetter": {
              "componentName": "NumberSetter",
              "isRequired": false,
            }
          },
          "initialValue": initialRowProps.span
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "xxlGutter",
            "zh-CN": "xxlGutter"
          }
        },
        "name": "xxlGutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.xxlGutter
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "xlGutter",
            "zh-CN": "xlGutter"
          }
        },
        "name": "xlGutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.xlGutter
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lgGutter",
            "zh-CN": "lgGutter"
          }
        },
        "name": "lgGutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.lgGutter
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "mdGutter",
            "zh-CN": "mdGutter"
          }
        },
        "name": "mdGutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.mdGutter
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "smGutter",
            "zh-CN": "smGutter"
          }
        },
        "name": "smGutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.smGutter
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "xsGutter",
            "zh-CN": "xsGutter"
          }
        },
        "name": "xsGutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.xsGutter
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gutter",
            "zh-CN": "gutter"
          }
        },
        "name": "gutter",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": initialRowProps.gutter
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {
      isContainer: true,

    }
  },
  group: "业务组件",
  category: "容器"
};
const snippets: Snippet[] = [
  {
    "title": "行容器",
    "screenshot": "",
    "schema": {
      "componentName": "Row",
      "props": {}
    }
  }
];

export default {
  ...RowMeta,
  snippets
};
