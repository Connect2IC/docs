// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Connect2IC",
  tagline: "A frontend auth library & toolkit for the Internet Computer",
  url: "https://connect2ic.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Connect2IC", // Usually your GitHub org/user name.
  projectName: "connect2ic", // Usually your repo name.
  trailingSlash: false,
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      // zh: {
      //   label: '简体中文',
      //   direction: 'ltr',
      //   htmlLang: 'zh-CN',
      // },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          // includeCurrentVersion: false,
          // lastVersion: '0.8',
          // versions: {
          // //   current: {
          // //     label: '0.8-beta',
          // //     path: '0.8',
          // //   },
          //   '0.8': {
          //     label: '0.8-beta',
          //     path: '0.8',
          //   },
          // },
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      // highlight: {
      //   theme: "default",
      //   hljs: (hljs) => {
      //     hljs.registerLanguage("sveltehtml", (hljs) => {
      //
      //     })
      //   },
      // },
      metadata: [
        { name: "title", content: "Documentation" },
        {
          name: "description",
          content: "Connect2IC is a frontend library",
        },
        {
          name: "keywords",
          content: "Connect2IC, Internet Computer, Internet Identity, AstroX ME, Plug, Stoic, Infinity Wallet.",
        },
      ],
      navbar: {
        title: "Connect2IC",
        logo: {
          alt: 'ME Logo',
          src: 'img/connect2ic_logo_light.png',
          width: 32,
          // height: 22,
        },
        items: [
          {
            href: "https://github.com/Connect2IC/connect2ic",
            label: "Github",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
          // {
          //   type: "dropdown",
          //   position: "right",
          //   label: "Framework",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "React",
          //       docId: "intro",
          //     },
          //     {
          //       type: "doc",
          //       label: "Vue",
          //       docId: "intro",
          //     },
          //     {
          //       type: "doc",
          //       label: "Svelte",
          //       docId: "intro",
          //     },
          //   ],
          //   dropdownActiveClassDisabled: true,
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/miamaruq",
              },
              {
                label: "Discord",
                href: "https://discord.gg/4kqMVknpgZ",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mio Quispe`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      /*algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },*/
    }),
}

module.exports = config
