// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ikaros Docs',
  tagline: 'Docs site for project ikaros.',
  favicon: 'img/favicon.ico',
  organizationName: 'ikaros-dev',
  projectName: 'ikaros',

  // Set the production url of your site here
  url: 'https://docs.ikaros.run',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'tw', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ikaros-dev/docs/edit/master/',
          editLocalizedFiles: true,
          // versions: {
          //   current: {
          //     label: "0.12",
          //     path: "0.12",
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ikaros-dev/docs/edit/master/',
          editLocalizedFiles: true,
          blogSidebarCount: 10,
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
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Ikaros Docs',
        logo: {
          alt: 'Ikaros Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: "https://ikaros.run",
            label: "Offical",
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/ikaros-dev/ikaros",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About",
            items: [
              {
                label: "Offical",
                href: "https://ikaros.run",
              },
              {
                label: "WeChat Channel",
                href: "https://ikaros.run/wechat.png",
              },
              {
                label: "Telegram Channel",
                href: "https://t.me/run_ikaros_channel",
              },
            ],
          },
          {
            title: "Community",
            items: [
             
              {
                label: "GitHub Issues",
                href: "https://github.com/ikaros-dev/ikaros/issues",
              },
              {
                label: "GitHub Organization",
                href: "https://github.com/ikaros-dev",
              },
              {
                label: "Telegram Group",
                href: "https://t.me/run_ikaros",
              },
              {
                label: "QQ Chat Group",
                href: "https://qm.qq.com/q/ogGuO2wmcw",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/ikaros-dev" target="_blank">Ikaros Developer</a>. 
        Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>.<br />
        China ICP Number: <a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" target="_blank">赣ICP备19013362号-4</a>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
