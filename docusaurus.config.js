const darkCodeTheme = require("prism-react-renderer/themes/palenight");
const math = require("remark-math");
const katex = require("rehype-katex");
const mermaid = require("mdx-mermaid");
const VersionsArchived = require("./versionsArchived.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ikaros 文档",
  tagline: "Ikaros 的文档站点",
  url: "https://docs.ikaros.run",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  organizationName: "ikaros-dev", // Usually your GitHub org/user name.
  projectName: "ikaros", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ikaros-dev/docs/edit/master/",
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [math, mermaid],
          rehypePlugins: [katex],
          lastVersion: "0.7",
          versions: {
            current: {
              label: "0.8.0-SNAPSHOT",
              path: "0.8.0-SNAPSHOT",
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.7,
          ignorePatterns: [
            "/0.1/**",
            "/0.2/**",
            "/0.3/**",
            "/0.4/**",
            "/0.5/**",
            "/0.6/**",
            "/0.7/**",
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Ikaros 文档",
        logo: {
          alt: "Ikaros Logo",
          src: "/img/favicon.ico",
        },
        items: [
          {
            href: "https://ikaros.run",
            label: "官网",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              ...Object.entries(VersionsArchived).map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                })
              ),
              {
                to: "/versions",
                label: "All versions",
              },
            ],
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
        copyright: `Copyright © 2023 Ikaros Developer. Built with Docusaurus.`,
        links: [
          {
            title: "关于",
            items: [
              {
                label: "官网",
                href: "https://ikaros.run",
              },
              {
                label: "GitHub 组织",
                href: "https://github.com/ikaros-dev",
              },
              {
                label: "Docs Access Analysis",
                href: "https://analytics.ikaros.run/share/HpFEzaaekV9NOCZn/ikaros%20docs",
              },
              {
                label: "Server Status",
                href: "https://status.ikaros.run/status/ikaros",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "QQ频道",
                href: "https://pd.qq.com/s/h5jes8af6"
              },
              {
                label: "微信公众号",
                href: "https://ikaros.run/wechat.png",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/ikaros-dev/ikaros/issues",
              },
              {
                label: "Telegram Channel",
                href: "https://t.me/run_ikaros_channel",
              },
              {
                label: "Telegram Group",
                href: "https://t.me/run_ikaros",
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
      },
    ],
  ],
  scripts: [
    {
      src: "https://analytics.ikaros.run/script.js",
      async: true,
      defer: true,
      "data-website-id": "3266d477-7c25-4d81-9787-15390a98c4d3",
    },
  ],
};

module.exports = config;