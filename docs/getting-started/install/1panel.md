---
title: 使用 1Panel 部署
description: 使用 1Panel 部署
---

import DockerArgs from "./slots/docker-args.md"

:::info
在继续操作之前，我们推荐您先阅读[《写在前面》](../prepare)，这可以快速帮助你了解 Ikaros。
:::


# 1Panel

> 1Panel 是新一代的 Linux 服务器运维管理面板

- 官网：<https://1panel.cn/>
- 文档：<https://1panel.cn/docs/>

![](https://resource.fit2cloud.com/1panel/img/overview.png)

# 方式一：容器编排安装Ikaros（推荐）

## 创建目录
在你的宿主机器上，按自己的习惯找一个自己常用并且能记住的应用目录，比如`/opt/ikaros`

创建这个目录，并在这个目录下创建`docker-compose.yaml`文件和`.env`文件
![](https://imgbed.ikaros.run/file/posts/1778948563189_20260517002236151.png)

`docker-compose.yaml`的内容参考: [使用 Docker Compose 部署](./docker-compose)

## 运行编排
参考[1panel官方的容器编排文档](https://1panel.cn/docs/v2/user_manual/containers/compose/)，在1panel web端，使用上面地址的compose文件，创建编排。

路径是：容器 => 编排 => 创建 => 路径选择 => 输入`docker-compose.yaml`文件路径 => 保存创建 => 查看编排日志等待容器跑起来。

## 使用面板PG数据库

当然如果你想用1panel的面板托管PG数据库，只需要去掉compose文件里的数据库那块，然后加上网络配置，修改数据库连接配置。

compose文件需要修改网络配置：
```shell
networks:
    # ikaros_networks:
    #  driver: bridge
    1panel-network:
        external: true
service:
    ikaros:
        ...
        ...
        networks:
            # ikaros_networks:
            - 1panel-network
        ...
        ...
```
别忘记修改`command`里的数据库配置，一般是`spring.r2dbc`和`spring.flyway`开头。


## 相比方式二更推荐的原因

就我个人使用下来，应用商店的应用其实并不好维护，从容器编排创建的维护起来更方便。

比如，修改环境变量，只能从应用商店那点五六下才能点到compose文件，直接从编排这里改或者改compose文件都容易出问题。

还是直接用compose文件创建容器编排比较合适，和在命令行执行`docker-compose up -d`命令效果差不多，还能在web端查看日志修改环境变量，不用ssh登录Shell。


# 方式二：应用商店安装Ikaros

## 应用商店添加ikaros

:::tip
如果已经配置过则无需配置；
配置前，请先安装好1panel，参考：<https://1panel.cn/docs/>
:::

进入1panel面板，按照下图步骤创建计划任务：
![](/img/getting-started-install-1panel/Snipaste_2025-12-23_07-59-06.png)

脚本内容：

国内网络：
```
wget -P /opt/1panel/resource/apps/local https://ghfast.top/https://github.com/ikaros-dev/1panel_app/archive/refs/heads/main.zip

# 检查 unzip 是否安装
if ! command -v unzip &> /dev/null
then
    echo "unzip 未安装，正在安装..."

    # 检测是否为 Ubuntu 系统
    if [ -f /etc/lsb-release ]; then
        echo "检测到 Ubuntu 系统，使用 apt 安装 unzip..."
        sudo apt update
        sudo apt install -y unzip

    # 检测是否为 CentOS 系统
    elif [ -f /etc/centos-release ]; then
        echo "检测到 CentOS 系统，使用 yum 安装 unzip..."
        sudo yum install -y unzip

    else
        echo "未知的系统类型，请手动安装 unzip."
        exit 1
    fi
else
    echo "unzip 已安装."
fi

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/main.zip

rm -rf /opt/1panel/resource/apps/local/ikaros

mv /opt/1panel/resource/apps/local/1panel_app-main /opt/1panel/resource/apps/local/ikaros

rm -rf /opt/1panel/resource/apps/local/main.zip
```

国外网络：
```
wget -P /opt/1panel/resource/apps/local https://github.com/ikaros-dev/1panel_app/archive/refs/heads/main.zip

# 检查 unzip 是否安装
if ! command -v unzip &> /dev/null
then
    echo "unzip 未安装，正在安装..."

    # 检测是否为 Ubuntu 系统
    if [ -f /etc/lsb-release ]; then
        echo "检测到 Ubuntu 系统，使用 apt 安装 unzip..."
        sudo apt update
        sudo apt install -y unzip

    # 检测是否为 CentOS 系统
    elif [ -f /etc/centos-release ]; then
        echo "检测到 CentOS 系统，使用 yum 安装 unzip..."
        sudo yum install -y unzip

    else
        echo "未知的系统类型，请手动安装 unzip."
        exit 1
    fi
else
    echo "unzip 已安装."
fi

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/main.zip

rm -rf /opt/1panel/resource/apps/local/ikaros

mv /opt/1panel/resource/apps/local/1panel_app-main /opt/1panel/resource/apps/local/ikaros

rm -rf /opt/1panel/resource/apps/local/main.zip
```

任务名称：自己随便取, 建议取 应用商店添加ikaros

配置好后，手动点击执行一次，等脚本执行完，然后去`应用商店`页面点击`更新应用列表/同步本地应用`按钮，然后搜索框搜索`ikaros`，如果搜索时默认没勾选则需要手动勾选`本地应用`。

## 安装ikaros

这个就简单了，进`应用商店`页面，

搜索PostgreSQL安装，如已经安装则不用安装，安装好后，

搜索ikaros，选中`端口外部访问`，修改`管理员用户名`和`管理员密码`，其它的配置看自己情况修改，然后点击右下角安装即可。

然后浏览器页面输入 `http://{你的服务器ip}:{你配置的端口号}/console` 进入控制台，输入用户名密码登录ikaros控制台。