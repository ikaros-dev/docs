---
title: APP
description: 基于Flutter的跨平台移动端APP
---

## 介绍

基于 Flutter 开发的跨平台（Android / iOS / Windows / Linux）动漫媒体客户端，通过
VLC 内核实现多格式视频播放，并调用 Win32 原生 API 实现 Windows 端画中画（PiP）与沉浸式全屏等
高级窗口管理功能；集成 Dandanplay 弹幕 API，通过双弹幕池机制实现毫秒级实时弹幕同步，并保证
seek 后弹幕状态的正确恢复；同时搭建了基于 GitHub Actions 的四平台并行 CI/CD 流水线，git push
tag 全自动构建平台安装包，产物通过 GitHub Releases 与 Cloudflare R2 双渠道分发。

GitHub: <https://github.com/ikaros-dev/app>

:::tip
目前功能不完善，欢迎体验测试
:::


## 下载

进 [ikaros app github releases](https://github.com/ikaros-dev/app/releases) => 点击最新版本 => Assert
=> 安装包(安卓是apk，IOS是ipa后缀)。

![](https://imgbed.ikaros.run/file/posts/1778955270516_20260517021428439.png)

## 移动端截图

### 条目收藏页和条目列表页

| <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-48-00-260_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-51-38-124_run.ikaros.app.jpg" alt="" width="200"/> | 
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|


### 我的页和历史纪录页

| <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-52-49-903_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-52-47-441_run.ikaros.app.jpg" alt="" width="200"/> | 
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|

### 条目高级搜索和条目全局搜索

| <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-51-47-328_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-52-12-451_run.ikaros.app.jpg" alt="" width="200"/> | 
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|

### 条目详情介绍和条目详情信息

| <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-49-11-233_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-49-13-142_run.ikaros.app.jpg" alt="" width="200"/> | 
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|

### 条目剧集播放

| <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-49-38-334_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-49-48-012_run.ikaros.app.jpg" alt="" width="200"/> | 
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|

### 剧情视频音轨选择、字幕轨道选择、弹幕配置

| <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-49-55-866_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-49-52-314_run.ikaros.app.jpg" alt="" width="200"/> | <img src="/img/getting-started-install-flutter-app/Screenshot_2026-03-03-13-50-02-381_run.ikaros.app.jpg" alt="" width="200"/> |
|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|



## 桌面端截图

### 条目收藏

![Ikaros App Desktop](/img/getting-started-install-flutter-app/Snipaste_2026-05-16_19-03-17.png)

### 条目列表

![Ikaros App Desktop](/img/getting-started-install-flutter-app/Snipaste_2026-05-16_19-04-24.png)


### 条目条件查询

![Ikaros App Desktop](/img/getting-started-install-flutter-app/Snipaste_2026-05-16_19-06-11.png)

### 条目剧集播放

![Ikaros App Desktop](/img/getting-started-install-flutter-app/Snipaste_2026-05-16_18-30-55.png)