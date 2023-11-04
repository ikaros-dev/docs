---
title: Jellyfin插件
description: Jellyfin插件说明
---

## GitHub

<https://github.com/ikaros-dev/plugin-jellyfin>

## Jellyfin

- 官网：<https://jellyfin.org/>

## 条目目录生成任务

此插件启动后，每隔15分钟执行一次条目目录生成任务，

该任务会根据数据库条目数据，在应用目录下的`jellyfin` 目录下生成两个目录：

- `normal` 目录：这个目录下全是 不属于 `NSFW` 的 条目生成的目录
- `nsfw` 目录：这个目录下全是 属于 `NSFW` 的 条目生成的目录

单个条目目录的名称格式是：`条目中文名 + '-' + 条目原始名 + '(' + yyyy-MM-hh + ')'`, 例如 `轻音少女 - けいおん！ (2009-04-02)`

单个条目目录里，会生成(硬链接) 封面文件 `poster.jpg` 和 生成`tvshow.nfo` 文件，

如果条目的剧集绑定了资源，则会生成(硬链接)对应的剧集文件，剧集文件名就是资源文件的名称，

如果对应文件名称在数据库里可以找到对应的 后缀为 `.ass` 的文件(不需要在ikaros管理的同一个目录里)，则生成(硬链接)对应的字幕文件。

最后一个条目目录的生成文件大概如下图：

![Ikaros Generate Jellyfin Subject Files](/img/plugins-plugin-jellyfin/Snipaste_2023-07-30_15-28-48.png)

## 如何使用生成的目录

Jellyfin 的容器挂载目录添加这个目录，在后台添加库，
你可以选择挂载 `normal` 或者 `nsfw` 目录其中的哪个，

内容类型选择 `节目`

:::tip
元数据下载器建议全部不勾选！如果实在要勾选，请安装jellyfin的番组计划插件，勾选番组计划，其它的都不建议勾选。
:::

然后您做了一些其它设置后就可以保存了。
