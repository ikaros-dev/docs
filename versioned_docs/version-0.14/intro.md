---
id: intro
sidebar_label: 简介
title: ""
sidebar_position: 1
hide_title: true
slug: /
---

<p align="center">
    <a href="https://ikaros.run" target="_blank" rel="noopener noreferrer">
        <img width="100" src="/img/favicon.ico" alt="Ikaros logo" />
    </a>
</p>

<p align="center"><b>Ikaros</b> [Ίκαρος]，专注于ACGMN的内容管理系统(CMS)。</p>

<p align="center">ACGMN全拼是：Anime(动画) + Comic(漫画) + Game(游戏) + Music(音乐) + Novel(小说)</p>

<p align="center">
<a href="https://github.com/ikaros-dev/ikaros/releases"><img alt="Github Releases" src="https://img.shields.io/github/v/release/ikaros-dev/ikaros?include_prereleases&style=flat-square" /></a>
<a href="https://github.com/ikaros-dev/ikaros/stargazers"><img alt="GitHub Stargazers" src="https://img.shields.io/github/stars/ikaros-dev/ikaros.svg?style=flat-square&label=Stars&logo=github" /></a>
<a href="https://hub.docker.com/r/ikarosrun/ikaros"><img alt="Docker pulls" src="https://img.shields.io/docker/pulls/liguohaocn/ikaros?style=flat-square" /></a>
<a href="https://app.codecov.io/github/ikaros-dev/ikaros"><img alt="code coverage" src="https://img.shields.io/codecov/c/github/ikaros-dev/ikaros/master?style=flat-square" /></a>
<a href="https://github.com/ikaros-dev/ikaros/commits"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ikaros-dev/ikaros.svg?style=flat-square" /></a>
<a href="https://github.com/ikaros-dev/ikaros/actions"><img alt="GitHub workflow build status" src="https://img.shields.io/github/actions/workflow/status/ikaros-dev/ikaros/ikaros-server-ci.yml?branch=master&style=flat-square" /></a>
<br />
</p>

---

## 快速开始

```bash
docker run \
  -it -d \
  --name ikaros \
  -p 9999:9999 \
  -v ~/.ikaros:/root/.ikaros \
  ikarosrun/ikaros:v0.14.1 \
  --ikaros.security.initializer.master-username=tomoki \
  --ikaros.security.initializer.master-password=tomoki
```

控制台的路径是 `/console` 。
默认端口是`9999`，默认用户名密码是通过上述两个参数控制的，
如没有用这两个参数启动，则默认的用户名是 `tomoki`，密码在打印在日志里(只有首次运行会打印密码)。

以上仅作为体验使用，详细部署文档请查阅：[使用 Docker Compose 部署](./getting-started/install/docker-compose.md)

## 插件

插件汇总在这个仓库：<https://github.com/ikaros-dev/awesome>

## 视频

- 功能预览视频: <https://www.bilibili.com/video/BV1Uw411B7o6/>
- 安装视频：<https://www.bilibili.com/video/BV1zr4y1R7aQ/>
- 最新日志介绍：<https://www.bilibili.com/video/BV1Sw411n73j/>

## 简要帮助

- 打开全局搜索是按键盘 `Ctrl` + `/` .

## 许可证

[![license](https://img.shields.io/github/license/ikaros-dev/ikaros.svg?style=flat-square)](https://github.com/ikaros-dev/ikaros/blob/master/LICENSE)

ikaros 使用 AGPL-v3.0 协议开源，请遵守开源协议。

## 贡献

参考 [CONTRIBUTING](https://github.com/ikaros-dev/ikaros/blob/master/CONTRIBUTING.MD)。

## 状态

![Repobeats analytics](https://repobeats.axiom.co/api/embed/f7285853048ff09f313f6483901e2af0e638f666.svg "Repobeats analytics image")

[![Stargazers over time](https://starchart.cc/ikaros-dev/ikaros.svg)](https://starchart.cc/ikaros-dev/ikaros)

