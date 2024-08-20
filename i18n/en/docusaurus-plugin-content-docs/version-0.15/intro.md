---
id: intro
sidebar_label: Intro
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

<p align="center"><b>Ikaros</b> [Ίκαρος], Dedicated to ACGMN's Content Management System (CMS).</p>

<p align="center">ACGMN stands for: Anime + Comic + Game + Music + Novel</p>

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

## Quick Start

```bash
docker run \
  -it -d \
  --name ikaros \
  -p 9999:9999 \
  -v ~/.ikaros:/root/.ikaros \
  ikarosrun/ikaros:v0.11.5 \
  --ikaros.security.initializer.master-username=tomoki \
  --ikaros.security.initializer.master-password=tomoki
```

The console path is `/console`.
The default port is `9999`, and the default username and password are controlled by the above two parameters. If not specified, the default username is `tomoki`, and the password will be printed in the logs (only printed on the first run).

The above is for demonstration purposes only. For detailed deployment instructions, please refer to: [Deploying with Docker Compose](./getting-started/install/docker-compose.md)

## Plugins

A collection of plugins can be found in this repository: <https://github.com/ikaros-dev/awesome>

## Videos

- Feature Preview video: <https://www.bilibili.com/video/BV1Uw411B7o6/>
- Installation Video: <https://www.bilibili.com/video/BV1zr4y1R7aQ/>

## Brief Help

- To open global search, press `Ctrl` + `K`.

## License

[![license](https://img.shields.io/github/license/ikaros-dev/ikaros.svg?style=flat-square)](https://github.com/ikaros-dev/ikaros/blob/master/LICENSE)

Ikaros is open-sourced under the AGPL-v3.0 license. Please comply with the open-source license.

## Contribution

Refer to [CONTRIBUTING](https://github.com/ikaros-dev/ikaros/blob/master/CONTRIBUTING.MD).
 
## Status

![Repobeats analytics](https://repobeats.axiom.co/api/embed/f7285853048ff09f313f6483901e2af0e638f666.svg "Repobeats analytics image")

