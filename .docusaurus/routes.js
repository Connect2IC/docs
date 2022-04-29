
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','459'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','1ec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','547'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','b50'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','2fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','e3f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','b64'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','798'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','a09'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','440'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','de0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','fb3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','f98'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','cbc'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','b57'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','382'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','aa0'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','50a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','76c'),
    exact: true
  },
  {
    path: '/docs/0.8',
    component: ComponentCreator('/docs/0.8','be1'),
    routes: [
      {
        path: '/docs/0.8/API Reference',
        component: ComponentCreator('/docs/0.8/API Reference','99d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.8/category/quick-start',
        component: ComponentCreator('/docs/0.8/category/quick-start','7d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.8/intro',
        component: ComponentCreator('/docs/0.8/intro','f9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.8/quick_start/quick_start_rn',
        component: ComponentCreator('/docs/0.8/quick_start/quick_start_rn','0fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.8/quick_start/quick_start_svelte',
        component: ComponentCreator('/docs/0.8/quick_start/quick_start_svelte','548'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.8/quick_start/quick_start_vue',
        component: ComponentCreator('/docs/0.8/quick_start/quick_start_vue','d55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.8/tech_spec',
        component: ComponentCreator('/docs/0.8/tech_spec','c0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','d5b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
