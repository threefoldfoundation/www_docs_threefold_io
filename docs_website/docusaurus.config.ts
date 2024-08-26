import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ThreeFold Docs',
  tagline: 'Decentralized Autonomous Cloud',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.threefold.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mik-tf', // Usually your GitHub org/user name.
  projectName: 'mik-tf.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
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

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/threefold-social-card.png',
    navbar: {
      title: 'ThreeFold',
      logo: {
        alt: 'ThreeFold Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
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
              label: 'Litepaper',
              to: '/docs/litepaper',
            },
            {
              label: 'Tokenomics',
              to: '/docs/tokenomics',
            },
            {
              label: 'Node Guides',
              to: '/docs/category/node-guides',
            },
            {
              label: 'References',
              to: '/docs/category/references',
            },
            {
              label: 'Legal',
              to: '/docs/category/legal',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.threefold.io',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/threefold',
            },
            {
              label: 'X',
              href: 'https://x.com/threefold_io',
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
              label: 'GitHub',
              href: 'https://github.com/threefoldtech/home',
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
