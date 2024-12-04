---
title: 蜜柑计划插件
description: 蜜柑计划插件说明（不推荐使用）
---

## GitHub

<https://github.com/ikaros-dev/plugin-mikan>

## 蜜柑计划

- 官网：<https://mikanime.tv/>


## QBittorrent

:::tip
您的qbittorrent的pid和uid需要配置为有访问ikaros宿主机目录的用户uid和pid，如果是ubuntu，直接配置成root的0，如果是nas，你得先去获取下nas对应有目录权限的用户的uid和pid。

您还需要给qbittorrent容器挂载一个ikaros的缓存目录：

{您Ikaros容器在主机上的缓存目录绝对路径}:/root/.ikaros/caches
:::

## 配置




您可以在后台配置蜜柑计划的RSS和`Qbitorrent`的地址

![Ikaros Console Plugin Config](/img/plugins-plugin-mikan/Snipaste_2023-07-30_15-48-14.png)




## 功能说明

会在插件启动时，开启两个定时任务：

- 解析蜜柑计划订阅任务：每隔三十分钟解析蜜柑计划订阅RSS，将对应的torrent添加到qbittorrent，分类是 `ikaors` ，并给torrent打上标签，标签值是番组计划的条目ID。
- 导入下载文件并添加条目：每隔五分钟，查询下qbittorrent的`ikaros`分类的文件是否下载完成，将下载完成的导入(软链接)ikaros的文件管理，并添加对应的条目，并匹配条目剧集，如果匹配到剧集，则给用户发送邮件，邮件地址的配置在 `设置` => `邮件配置` => `开启邮件` => `收件方邮件地址` 。

:::tip
您需要开启并配置好SMTP邮件服务器配置，才可以正常接受邮件。<br />您的封面URL邮件客户端能够正常访问，邮件的封面图片才会正常显示。
:::

邮件大概如下图：

![Ikaros Subject Update Mail](/img/plugins-plugin-mikan/Snipaste_2023-07-30_16-04-21.png)
