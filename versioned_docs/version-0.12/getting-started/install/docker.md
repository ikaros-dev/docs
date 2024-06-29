---
title: 使用 Docker 部署
description: 使用 Docker 部署
---

import DockerArgs from "./slots/docker-args.md"

:::info
在继续操作之前，我们推荐您先阅读[《写在前面》](../prepare)，这可以快速帮助你了解 Ikaros。
:::

:::tip
此文档仅提供使用默认 H2 数据库的 Docker 运行方式，主要用于体验和测试，在生产环境我们不推荐使用 H2 数据库。

如果需要使用其他数据库部署，我们推荐使用 Docker Compose 部署：[使用 Docker Compose 部署](./docker-compose)
:::

## 环境搭建

- Docker 安装文档：<https://docs.docker.com/engine/install/>

:::tip
我们推荐按照 Docker 官方文档安装 Docker，因为部分 Linux 发行版软件仓库中的 Docker 版本可能过旧。
:::

## 使用 Docker 镜像

可用的 Ikaros 的 Docker 镜像：

- [ikarosrun/ikaros](https://hub.docker.com/r/ikarosrun/ikaros)

:::info 注意
目前 Ikaros 并未更新 Docker 的 latest 标签镜像，主要因为 暂未发布正式版本。我们推荐使用固定版本的标签，比如 `ikarosrun/ikaros:v0.12.6` 。

- `ikarosrun/ikaros:v0.12.6`：表示最新的可用镜像，每次发布时都会根据GitHub的标签构建一个新的镜像
- `ikarosrun/ikaros:dev`：表示开发中的镜像，不推荐使用，每次Pull Request合并到主分支都会构建并覆盖该镜像。。

后续文档以 `ikarosrun/ikaros:v0.12.6` 为例。
:::

1. 创建容器

    ```bash
    docker run \
        -it -d \
        --name ikaros \
        -p 9999:9999 \
        -v ~/.ikaros:/root/.ikaros \
        ikarosrun/ikaros:v0.12.6 \
        --ikaros.security.initializer.master-username=tomoki \
        --ikaros.security.initializer.master-password=tomoki
    ```

    :::info
    注意：此命令默认使用自带的 H2 Database 数据库。如需使用 PostgreSQL，请参考：[使用 Docker Compose 部署](./docker-compose)
    :::

    - **-it**：开启输入功能并连接伪终端
    - **-d**：后台运行容器
    - **--name**：为容器指定一个名称
    - **-p**：端口映射，格式为 `主机(宿主)端口:容器端口` 。
    - **-v**：工作目录映射。形式为：`-v 宿主机路径:/root/.ikaros`，后者不能修改。

    变量详解：

    <DockerArgs />

1. 用浏览器访问 `/console` 即可进入 Ikaros 管理页面，用户名和密码为启动参数中的 `master-username` 和 `master-password`。

    :::tip
    如没有用这两个参数启动，则默认的用户名是 `tomoki`，密码在打印在日志里(只有首次运行会打印密码)。
    :::

## 升级版本

1. 拉取新版本镜像(请选择最新的标签替换下方的`v0.12.6`)

  ```bash
  docker pull ikarosrun/ikaros:v0.12.6
  ```

2. 停止运行中的容器

  ```bash
  docker stop ikaros
  docker rm ikaros
  ```

3. 备份数据（重要）

  ```bash
  cp -r ~/.ikaros ~/ikaros.archive
  ```

  > 需要注意的是，`ikaros.archive` 文件名不一定要根据此文档命名，这里仅仅是个示例。

4. 更新 Ikaros

  修改版本号后，按照最初安装的方式，重新创建容器即可。

    ```bash {6}
    docker run \
        -it -d \
        --name ikaros \
        -p 9999:9999 \
        -v ~/.ikaros:/root/.ikaros \
        ikarosrun/ikaros:v0.12.6 \
        --ikaros.security.initializer.master-username=tomoki \
        --ikaros.security.initializer.master-password=tomoki
    ```
