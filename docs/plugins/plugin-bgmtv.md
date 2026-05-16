---
title: 番组计划插件
description: 番组计划插件说明
---

## GitHub

<https://github.com/ikaros-dev/plugin-bgmtv>

## 番组计划

- 官网：<https://bgm.tv/>
- 百科：<https://zh.moegirl.org.cn/Bangumi>

## 功能

### 已实现

- 实现了番剧同步接口，可通过番组计划快速拉取条目数据

### 待实现

- 实现和番组计划的番剧收藏同步功能

### 插件安装
插件GitHub：<https://github.com/ikaros-dev/plugin-bgmtv>

先进插件GitHub => release => Assets => 点击对应的jar包下载

![](https://imgbed.ikaros.run/file/posts/1778954112367_20260517015506827.png)

回到 ikaros web console, 进入 系统 => 插件 => 点击`安装插件`按钮

![](https://imgbed.ikaros.run/file/posts/1778954177411_20260517015614342.png)

将刚刚下载的jar文件拖拽上传安装

![](https://imgbed.ikaros.run/file/posts/1778954312444_20260517015825983.png)

等待安装完毕页面自动刷新。

安装完毕的插件是处于`就绪`状态
![](https://imgbed.ikaros.run/file/posts/1778954362680_20260517015917437.png)

点击右边的三个点，再点击启动按钮启动插件
![](https://imgbed.ikaros.run/file/posts/1778954431829_20260517020024648.png)

一切正常的话，插件的状态会变成`启动`
![](https://imgbed.ikaros.run/file/posts/1778954500756_20260517020135328.png)


## 配置（可选）

您可以在后台配置番组计划的`TOKEN`和是否开启代理,

没`TOKEN`无法拉取`NSFW`条目

要不要配置代理看你的网络能不能直连

![Ikaros Console Plugin Config](/img/plugins-plugin-bgmtv/Snipaste_2023-07-30_15-42-22.png)

## 快速新增条目
借助插件功能，能快速从番组计划添加条目

去番组计划，查询我需要快速新增的条目ID

我这里演示的是 条目`天使の3P!`: https://bgm.tv/subject/194261

后面这一串`194261`就是番组计划的条目ID

![Ikaros Console Plugin Config](/img/plugins-plugin-bgmtv/Snipaste_2026-05-16_17-36-16.png)

按照上述步骤，选择`平台`为`BGM_TV`, 填入条目ID，然后点击`同步`按钮

等待一会儿，网络没问题的话，会自动通过插件拉取对应的条目，然后在对应的筛选条件里填入条目信息，展示出来对应的条目

![Ikaros Console Plugin Config](/img/plugins-plugin-bgmtv/Snipaste_2026-05-16_17-39-44.png)

可以鼠标点击条目卡片，进入条目详情页，查看条目的信息

![Ikaros Console Plugin Config](/img/plugins-plugin-bgmtv/Snipaste_2026-05-16_17-40-53.png)

到此，快速新增条目完成。

如果您还需要将条目的剧集和附件资源进行绑定，请参考：[条目剧集绑定附件资源](../user-guide/subject-episodes-attachments)
