import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ThreeFold Docs',
  tagline: 'Self-Healing Data & Cloud Network',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.projectmycelium.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'git.ourworld.tf/tfgrid', // Usually your GitHub org/user name.
  projectName: 'www_docs_threefold_io', // Usually your repo name.
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


    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/threefold-social-card.png',
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
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Litepaper',
              to: '/docs/litepaper',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
            },
            {
              label: 'Manual',
              to: 'https://manual.grid.tf/',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Become a Farmer',
              to: '/docs/category/become-a-farmer',
            },
            {
              label: 'Tech',
              to: '/docs/tech',
            },
            {
              label: 'Tokenomics',
              to: '/docs/tokenomics',
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