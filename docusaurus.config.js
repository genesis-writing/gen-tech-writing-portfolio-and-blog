// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// If you are using dotenv (https://www.npmjs.com/package/dotenv)
import 'dotenv/config';

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  // Mermaid diagrams
  markdown: {
    mermaid: true, // Enable Mermaid support
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Site info
  title: 'Genesis Sorto',
  tagline: 'Canadian Technical Writer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://genwritesdocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // To ensure functionality with Algolia search
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'genesis-writing', // Usually your GitHub org/user name.
  projectName: 'gen-tech-writing-portfolio-and-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Algolia search environmental variables
  customFields: {
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
          postsPerPage: 5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // Replace with your project's social card
      image: 'img/genesis-writing-social_card.png',
      navbar: {
        title: "Gen's Technical Writing Portfolio",
        logo: {
          alt: 'Gen Writes Logo',
          src: 'img/gs-web-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'my-tech-stack',
            position: 'left',
            label: 'Tech Stack',
          },
          {
            type: 'doc',
            docId: 'crowrite',
            position: 'left',
            label: 'Crowrite',
          },
          {
            href: 'https://www.linkedin.com/in/genesis-sorto/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/genesis-writing/gen-tech-writing-portfolio-and-blog',
            label: 'Repo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/genesis-sorto/',
              },
              {
                label: 'Email',
                href: 'mailto:genesis.writing4fun@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Genesis Sorto, Technical Writer - Site built with Docusaurus 
        <br>Opinions are my own and do not reflect my employer's views.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
   // }),

  algolia: {
    // The application ID provided by Algolia
    appId: process.env.ALGOLIA_APP_ID,
    // Public API key: it is safe to commit it
    apiKey: process.env.ALGOLIA_PUBLIC_API_KEY,

    indexName: 'genwrites',

    // Optional: see doc section below
    contextualSearch: true,

    // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    // externalUrlRegex: 'external\\.com|domain\\.com',

    // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    // replaceSearchResultPathname: {
      // from: '/docs/', // or as RegExp: /\/docs\//
      // to: '/',
    // },

    // Optional: Algolia search parameters
    searchParameters: {},

    // Optional: path for search page that enabled by default (`false` to disable it)
    searchPagePath: 'search',

    // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    insights: false,
    //... other Algolia params
    },
  }),
};

export default config;
