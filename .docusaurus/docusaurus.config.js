/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Connect2IC",
  "tagline": "Connect2IC is an open protocol to aggregate a few widely used identity and wallet service of Internet Computer.",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Connect2IC",
  "projectName": "connet2ic.github.io",
  "trailingSlash": false,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr",
        "htmlLang": "en-US"
      }
    }
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "includeCurrentVersion": false,
          "lastVersion": "0.8",
          "versions": {
            "0.8": {
              "label": "0.8-beta",
              "path": "0.8"
            }
          },
          "sidebarPath": "/Users/Ken/Documents/Blockchain/AstroX/Product/FAQ/Connect2IC_docs/docs/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "/Users/Ken/Documents/Blockchain/AstroX/Product/FAQ/Connect2IC_docs/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "metadata": [
      {
        "name": "title",
        "content": "Documentation"
      },
      {
        "name": "description",
        "content": "Connect2IC is an open protocol to aggregate a few widely used identity and wallet service of Internet Computer"
      },
      {
        "name": "keywords",
        "content": "Connect2IC, Internet Computer, Internet Identity, AstroX ME, Plug, Stoic, Infinity Wallet."
      }
    ],
    "navbar": {
      "title": "Documentation",
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Connect2IC"
        },
        {
          "href": "https://github.com/Connect2IC",
          "label": "GitHub",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownActiveClassDisabled": true,
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/miamaruq"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/Wn49abkhFU"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Agent Dart",
              "href": "https://github.com/AstroxNetwork/agent_dart"
            },
            {
              "label": "Candid Dart",
              "href": "https://github.com/AstroxNetwork/candid_dart"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Mio. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "hideableSidebar": false,
    "autoCollapseSidebarCategories": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};