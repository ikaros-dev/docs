---
title: 使用 Docker Compose 部署
description: 使用 Docker Compose 部署
---

import DockerArgs from "./slots/docker-args.md"

:::info
在继续操作之前，我们推荐您先阅读[《写在前面》](../prepare.md)，这可以快速帮助你了解 Ikaros。
:::

## 环境搭建

- Docker 安装文档：<https://docs.docker.com/engine/install/>
- Docker Compose 安装文档：<https://docs.docker.com/compose/install/>

:::tip
我们推荐按照 Docker 官方文档安装 Docker 和 Docker Compose，因为部分 Linux 发行版软件仓库中的 Docker 版本可能过旧。
:::

## 创建容器组

可用的 Ikaros 的 Docker 镜像：

- [ikarosrun/ikaros](https://hub.docker.com/r/ikarosrun/ikaros)

:::info 注意
目前 Ikaros 并未更新 Docker 的 latest 标签镜像，主要因为 暂未发布正式版本。我们推荐使用固定版本的标签，比如 `ikarosrun/ikaros:v0.12.6` 。

- `ikarosrun/ikaros:v0.12.6`：表示最新的可用镜像，每次发布时都会根据GitHub的标签构建一个新的镜像
- `ikarosrun/ikaros:dev`：表示开发中的镜像，不推荐使用，每次Pull Request合并到主分支都会构建并覆盖该镜像。。

后续文档以 `ikarosrun/ikaros:v0.12.6` 为例。
:::

1. 在系统任意位置创建一个文件夹，此文档以 `~/ikaros` 为例。

  ```bash
  mkdir ~/ikaros && cd ~/ikaros
  ```

  :::info
  注意：后续操作中，Ikaros 产生的所有数据都会保存在这个目录，请妥善保存。
  :::

2. 创建 `docker-compose.yaml`

  此文档提供两种场景的 Docker Compose 配置文件，请根据你的需要**选择一种**。

    1. 创建 Ikaros + PostgreSQL 的实例：

    ```yaml {24-34,51} title="~/ikaros/docker-compose.yaml"
    version: "3"
    services:
        # ikaros
        ikaros:
            image: ikarosrun/ikaros:v0.12.6
            container_name: ikaros
            restart: on-failure:3
            depends_on:
              ikaros_database:
                condition: service_healthy
            networks:
              ikaros_networks:
            volumes:
              - ./:/root/.ikaros
            ports:
              - "9999:9999"
            healthcheck:
              test: [ "CMD", "curl", "-f", "http://localhost:9999/actuator/health"]
              interval: 30s
              timeout: 5s
              retries: 5
              start_period: 30s
            environment:
              # 避免中日文文件名称乱码，需要设置文件编码，先通过命令 [locale -a] 查询下宿主机编码，有的是 [C] 有的是 [zh_CN]，替换下方对应的字符
              - LANG=C.UTF-8
              - LANGUAGE=C:zh
              - LC_ALL=C.UTF-8
              - TZ=Asia/Shanghai
            command:
              - --logging.charset.console=UTF-8
              - --logging.charset.file=UTF-8
              # log level for package, such as INFO or DEBUG
              - --logging.level.run.ikaros.server=INFO
              - --logging.level.run.ikaros.plugin=INFO
              - --logging.level.run.ikaros.jellyfin=INFO
              - --sun.jnu.encoding=UTF-8
              - --spring.r2dbc.url=r2dbc:pool:postgresql://ikaros_database/ikaros
              - --spring.r2dbc.username=ikaros
              # PostgreSQL 的密码，请保证与下方 POSTGRES_PASSWORD 的变量值一致。
              - --spring.r2dbc.password=openpostgresql
              - --spring.sql.init.platform=postgresql
              # 初始化的超级管理员用户名
              - --ikaros.security.initializer.master-username=tomoki
              # 初始化的超级管理员密码
              - --ikaros.security.initializer.master-password=tomoki

        # ikaros database
        ikaros_database:
            image: postgres:latest
            container_name: ikaros_database
            restart: on-failure:3
            networks:
              ikaros_networks:
            volumes:
              - ./database:/var/lib/postgresql/data
            healthcheck:
              test: [ "CMD", "pg_isready" ]
              interval: 10s
              timeout: 5s
              retries: 5
            environment:
              - POSTGRES_DB=ikaros
              - POSTGRES_USER=ikaros
              - POSTGRES_PASSWORD=openpostgresql

    networks:
      ikaros_networks:
        driver: bridge
    ```

    2. 仅创建 Ikaros 实例（使用默认的 H2 数据库，**不推荐用于生产环境，建议体验和测试的时候使用**）：

    ```yaml {19-24} title="~/ikaros/docker-compose.yaml"
    version: "3"
    services:
       # ikaros
      ikaros:
          image: ikarosrun/ikaros:v0.12.6
          container_name: ikaros
          restart: on-failure:3
          networks:
            ikaros_networks:
          volumes:
            - ./:/root/.ikaros
          ports:
            - "9999:9999"
          healthcheck:
            test: [ "CMD", "curl", "-f", "http://localhost:9999/actuator/health"]
            interval: 30s
            timeout: 5s
            retries: 5
            start_period: 30s
          environment:
            # 避免中日文文件名称乱码，需要设置文件编码，先通过命令 [locale -a] 查询下宿主机编码，有的是 [C] 有的是 [zh_CN]，替换下方对应的字符
            - LANG=C.UTF-8
            - LANGUAGE=C:zh
            - LC_ALL=C.UTF-8
            - TZ=Asia/Shanghai
          command:
            - --logging.charset.console=UTF-8
            - --logging.charset.file=UTF-8
            - --logging.level.run.ikaros.server=INFO
            - --logging.level.run.ikaros.plugin=INFO
            - --logging.level.run.ikaros.jellyfin=INFO
            - --sun.jnu.encoding=UTF-8
            # 初始化的超级管理员用户名
            - --ikaros.security.initializer.master-username=tomoki
            # 初始化的超级管理员密码
            - --ikaros.security.initializer.master-password=tomoki

    networks:
      ikaros_networks:
        driver: bridge
    ```

  参数详解：

  <DockerArgs />

3. 启动 Ikaros 服务

  ```bash
  docker-compose up -d
  ```

  实时查看日志：

  ```bash
  docker-compose logs -f ikaros
  ```

4. 用浏览器访问 `/console` 即可进入 Ikaros 管理页面，用户名和密码为在 `docker-compose.yaml` 文件中设置的 `master-username` 和 `master-password`。

:::tip
如没有用这两个参数启动，则默认的用户名是 `tomoki`，密码在打印在日志里(只有首次运行会打印密码)。
:::

## 更新容器组

1. 停止运行中的容器组

  ```bash
  cd ~/ikaros && docker-compose down
  ```

2. 备份数据（重要）

  ```bash
  cp -r ~/ikaros ~/ikaros.archive
  ```

  > 需要注意的是，`ikaros.archive` 文件名不一定要根据此文档命名，这里仅仅是个示例。

3. 更新 Ikaros 服务

  修改 `docker-compose.yaml` 中配置的镜像版本。

  ```yaml {3}
  services:
    ikaros:
      image: ikarosrun/ikaros:v0.12.6
      container_name: ikaros
  ```

  ```bash
  docker-compose pull ikaros
  ```

  ```bash
  docker-compose up -d
  ```
