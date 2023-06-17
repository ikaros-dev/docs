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
        dogitcs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ikaros-dev/docs/edit/master/",
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [math, mermaid],
          rehypePlugins: [katex],
          lastVersion: "0.1",
          versions: {
            current: {
              label: "0.2.0-SNAPSHOT",
              path: "0.2.0-SNAPSHOT",
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [
            "/0.1/**",
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
          alt: "Halo Logo",
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
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "微信公众号",
                href: "/img/wechat.png",
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
        redirects: [
          {
            to: "/0.2/getting-started/install/linux",
            from: [
              "/zh/install",
              "/install",
              "/zh/install/index",
              "/install/index",
              "/zh/install/linux",
              "/install/linux",
            ],
          },
          {
            to: "/getting-started/install/docker",
            from: ["/zh/install/docker", "/install/docker"],
          },
          {
            to: "/0.2/getting-started/upgrade",
            from: ["/zh/install/upgrade", "/install/upgrade"],
          },
          {
            to: "/getting-started/downloads",
            from: ["/zh/install/downloads", "/install/downloads"],
          },
          {
            to: "/user-guide/markdown",
            from: ["/zh/user-guide/markdown"],
          },
          {
            to: "/contribution/issue",
            from: ["/zh/contribution/issue"],
          },
          {
            to: "/contribution/pr",
            from: ["/zh/contribution/pr"],
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.startsWith("/0.1/")) {
            return [
              existingPath.replace("/0.1/", "/0.1.4/"),
              existingPath.replace("/0.1/", "/0.1.3/"),
              existingPath.replace("/0.1/", "/0.1.2/"),
              existingPath.replace("/0.1/", "/0.1.1/"),
              existingPath.replace("/0.1/", "/0.1.0/"),
            ];
          }
          if (existingPath.startsWith("/0.2.0-SNAPSHOT/")) {
            return [
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.0.0-SNAPSHOT/"),
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.1.0-SNAPSHOT/"),
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.2.0-SNAPSHOT/"),
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.3.0-SNAPSHOT/"),
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.4.0-SNAPSHOT/"),
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.5.0-SNAPSHOT/"),
              existingPath.replace("/0.2.0-SNAPSHOT/", "/0.6.0-SNAPSHOT/"),
            ];
          }
          return undefined;
        },
      },
    ],
  ],
};

module.exports = config;