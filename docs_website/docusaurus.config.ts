import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ThreeFold Docs',
  tagline: 'Self-Healing Data & Cloud Network',
  favicon: 'img/favicon.png',

  url: 'https://docs.threefold.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  scripts: [
    
    {
      src:
        '/js/crisp.js',
      async: false,
    },
  ],

  themeConfig: {

    algolia: {
      appId: 'ARAM4VJG2D',
      apiKey: '674fd2945f4e534903ff074723bd20be',
      indexName: 'threefold',
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/favicon.png',
    navbar: {
      title: '',
      logo: {
        alt: 'ThreeFold Logo',
        src: 'img/logo.svg',
        srcDark: 'img/new_logo_tft.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          type: 'docSidebar',
          sidebarId: 'farmingSidebar',
          position: 'left',
          label: 'Farm',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'left',
        },
        {
          href: 'https://threefold.io',
          label: 'ThreeFold.io',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/learn/introduction',
            },
            {
              label: 'Litepaper',
              to: '/docs/learn/litepaper',
            },
            {
              label: 'Roadmap',
              to: '/docs/learn/roadmap',
            },
            {
              label: 'Manual',
              href: 'https://manual.grid.tf/',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Become a Farmer',
              to: '/docs/farming',
            },
            {
              label: 'Tech',
              to: '/docs/learn/tech',
            },
            {
              label: 'Tokenomics',
              to: '/docs/learn/tokenomics',
            },            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/threefold',
            },
            {
              label: 'X',
              href: 'https://x.com/threefold_io',
            },
            {
              label: 'Forum',
              href: 'https://forum.threefold.io',
            },
            {
              label: 'Support',
              to: '/support',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'ThreeFold.io',
              href: 'https://threefold.io',
            },
            {
              label: 'Dashboard',
              href: 'https://dashboard.grid.tf',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/threefoldtech/home',
            },
            {
              label: 'Gitea',
              href: 'https://git.ourworld.tf',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ThreeFold`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;