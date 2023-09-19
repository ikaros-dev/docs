---
title: 写在前面
description: 在开始前，您需要了解的事项
---

## 环境要求

这里将讲述运行 Ikaros 所要求的一些软硬件的配置，我们建议您在运行或者部署之前先浏览一遍此页面。

### 硬件配置

:::tip
不推荐使用云服务器部署，Ikaros默认用户是私人使用不公开的，一般部署在家庭的内网里，并且不会对外开放访问。
:::

#### CPU

无特别要求。我们的 [Docker 镜像](https://hub.docker.com/r/ikarosrun/ikaros) 。

#### 内存

为了获得更好的体验，我们建议至少配置 1G 的 RAM。

#### 磁盘

无特别要求

#### 网络

请不要对外网（相对家里的内网）开放家里的服务。

### 软件环境

Ikaros 理论上可以运行在任何支持 Docker 及 Java 的平台。

#### Docker

必须在运行环境安装好 [Docker](https://www.docker.com/) 环境，目前 Ikaros 的默认安装运行方式均使用容器。

#### JRE（可选）

目前 Ikaros 的默认及推荐安装方式为 Docker 容器运行，使用 jar 包运行的方式需要用户自行构建 jar 包。

:::info
需要 JRE 17 的版本，推荐使用 OpenJDK 17。
:::

#### PostgreSQL（可选 + 推荐）

也可以使用系统自带的 H2 Database 数据库，无需安装。但不推荐在生产环境中使用 H2 Database。

#### Web 服务器（可选）

如果您部署在生产环境，那么你很可能需要进行域名绑定，这时候我们推荐使用诸如 [Nginx](http://nginx.org/)、[Caddy](https://caddyserver.com/) 之类的 Web 服务器进行反向代理。

#### Wget（可选）

后续的文档中，我们会使用 wget 为例，用于下载所需要的文件，所以请确保服务器已经安装好了这个软件包。当然，下载文件不限制工具，如果你对其他工具熟悉，可以忽略。

#### VIM（可选）

后续的文档中，我们会使用 vim 为例，用于修改一些必要的配置文件，所以同样请确保服务器已经安装了这个软件包。当前，修改文档也不限制工具，如果你对其他编辑软件熟悉，也可以忽略。

## 浏览器支持

1. 用户前台：使用 [Thymeleaf](https://www.thymeleaf.org/) 模板引擎 +  [Bootstrap](https://getbootstrap.com/) 构建的简单的展示页面，理论上是支持目前场景的现代浏览器。
2. 管理后台：支持目前常见的现代浏览器，具体视 [Vuejs](https://cn.vuejs.org/) 框架的支持情况而定。

## 名词解释

这里将列出后续文档中一些和 Ikaros 相关的名词含义。

### ~（符号）

代表当前系统下的 [用户目录](https://zh.wikipedia.org/wiki/%E5%AE%B6%E7%9B%AE%E5%BD%95)。

### 镜像

指 Ikaros 构建所产生的 [Docker 镜像](https://docs.docker.com/engine/reference/commandline/images/)。用户通过该镜像启动 Ikaros 应用。

### 工作目录

指 Ikaros 所依赖的工作目录，在 Ikaros 运行的时候会在系统当前用户目录下产生一个 `.ikaros` 的文件夹，绝对路径为 `~/.ikaros`。由于这个工作目录是固定的，所以上面所说的 `运行包`不限制所存放的位置，里面通常包含下列目录或文件：

1. `database`：存放 数据库 的物理文件，如果你使用其他数据库，那么数据在其它数据库那。
2. `indices`：内置的 [Lucene](https://lucene.apache.org/) 搜索引擎的索引数据
2. `plugins`：里面包含用户所安装的插件。
4. `files`：Ikaros的文件目录。
5. `logs`：运行日志目录。

### 插件

用于扩展 Ikaros 功能的软件包。插件独立于 Ikaros 核心应用，可以单独安装、卸载。

### 更多

[用户指南](../category/user-guide)
