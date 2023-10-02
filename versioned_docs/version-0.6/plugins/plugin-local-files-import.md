---
title: 本地导入插件
description: 本地导入插件说明
---

## GitHub

<https://github.com/ikaros-dev/plugin-local-files-import>

## 介绍

目前的方案是，启动的时候，检查当前应用工作目录下，是否有 `links` 目录存在，
如果该目录下存在文件或者目录， 在当前插件启动后，会将所有文件导入到数据库的文件管理中，
默认是软链接，失败了会进行复制。

推荐将已有资源移动到这个目录，然后启动插件进行导入，最后再把已有资源移动回去；如果软连接成功并不会多占用磁盘空间。