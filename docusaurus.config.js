// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Connect2IC',
  tagline: 'Connect2IC is an open protocol to aggregate a few widely used identity and wallet service of Internet Computer.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Connect2IC', // Usually your GitHub org/user name.
  projectName: 'connet2ic.github.io', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          includeCurrentVersion: false,
          lastVersion: '0.8',
          versions: {
          //   current: {
          //     label: '0.8-beta',
          //     path: '0.8',
          //   },
            '0.8': {
              label: '0.8-beta',
              path: '0.8',
            },
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'title', content: 'Documentation'},
        {name: 'description', content: 'Connect2IC is an open protocol to aggregate a few widely used identity and wallet service of Internet Computer'},
        {name: 'keywords', content: 'Connect2IC, Internet Computer, Internet Identity, AstroX ME, Plug, Stoic, Infinity Wallet.'}
      ],
      navbar: {
        title: 'Documentation',
        // logo: {
        //   alt: 'ME Logo',
        //   src: 'img/logo.png',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Connect2IC',
          },
          {
            href: 'https://github.com/Connect2IC',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Connect2IC',
          //       to: "/0.8/intro",
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/miamaruq',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Wn49abkhFU',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Agent Dart',
                href: 'https://github.com/AstroxNetwork/agent_dart',
              },
              {
                label: 'Candid Dart',
                href: 'https://github.com/AstroxNetwork/candid_dart',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mio. Built with Docusaurus.`,
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
};

module.exports = config;
