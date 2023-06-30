/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  "tutorialSidebar": [
    "intro",
    {
      "type": "category",
      "label": "入门",
      "link": {
        "type": "generated-index"
      },
      "collapsed": false,
      "items": [
        "getting-started/prepare",
        {
          "type": "category",
          "label": "安装指南",
          "link": {
            "type": "generated-index"
          },
          "items": [
            "getting-started/install/docker-compose",
            "getting-started/install/docker"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "用户指南",
      "link": {
        "type": "generated-index"
      },
      "items": [
        "user-guide/common",
        "user-guide/files",
        "user-guide/subjects",
        "user-guide/plugins",
        "user-guide/settings",
        "user-guide/users",
        "user-guide/faq"
      ]
    },
    "about"
  ]
};
