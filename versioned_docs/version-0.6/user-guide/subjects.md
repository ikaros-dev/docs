---
title: 条目
description: 条目管理相关功能说明
---

## 管理主面板

![Ikaros Console Subject Manager](/img/user-guide-subjects/Snipaste_2023-07-30_13-55-26.png)

- 1：输入条目原生名称回车搜索，原始名称一般都是日文的；
- 2：输入条目中文名称回车搜索；
- 3：筛选条件，是否条目是否属于`NSFW`（Not Safe/Suitable For Work），
     关于什么是`NSFW`请看：<https://mzh.moegirl.org.cn/NSFW> ；
- 4：筛选条件，条目所属类型，是动画还是其它的什么；
- 5：打开`条目同步弹框`；
- 6：前往`新增条目页`；
- 7：单个条目卡片，上方是条目原始名称，下方是条目的封面，点击前往对应`条目详情页`；

## 条目同步弹框

![Ikaros Console Subject Manager](/img/user-guide-subjects/Snipaste_2023-07-30_14-05-25.png)

点击弹框外部区域或者X可以关闭弹框，如果没有启动任何条目同步的实现插件，这里会提示对应的信息，而不是有可以选择的选择框和输入框。

## 新增条目页

![Ikaros Console Subject Manager](/img/user-guide-subjects/Snipaste_2023-07-30_14-10-02.png)

- 1：点击打开`文件选择弹框`；
- 2：点击打开`添加剧集弹框`；
- 3：点击`创建`按钮提交；

### 文件选择弹框

![Ikaros Console Subject Manager](/img/user-guide-subjects/Snipaste_2023-07-30_14-13-50.png)

点击单行选中，选中的行背景色会和其它行不同，
选中一个文件后，点击确认，会将文件的URL填充到 `条目封面` 这个输入框内。

:::tip
此时数据并未保存到服务端数据库里，需要等点击`创建`按钮一起提交。
:::

### 添加剧集弹框

![Ikaros Console Subject Manager](/img/user-guide-subjects/Snipaste_2023-07-30_14-16-14.png)

输入对应的内容，点击确认后，会在 `剧集` 表格里新增一条记录。

:::tip
此时数据并未保存到服务端数据库里，需要等点击`创建`按钮一起提交。
:::

## 条目详情页

![Ikaros Console Subject Manager](/img/user-guide-subjects/Snipaste_2023-07-30_14-20-03.png)

- 1：前往条目编辑页，类似新增条目页，只是数据自动填充了，可以进行修改，并提交更新；
- 2：删除当前条目；
- 3：条目封面、信息、剧集展示；
- 4：条目`InfoBox`展示；
- 5：点击打开文件多选弹框，确认后会和选中的文件进行批量匹配剧集序号，批量匹配的规则是：正则匹配 `XXX[08]XXXX.XXX` 和 `XXXX 08 XXXX.XXX`；
- 6：点击打开文件剧集详情弹框，另外双击当前剧集行也可打开文件剧集详情弹框；
- 7：点击打开文件单选框，进行单个剧集和资源的匹配，如果匹配后，按钮图标将更新为 勾；
