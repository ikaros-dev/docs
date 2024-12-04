---
title: 使用 1Panel 部署
description: 使用 1Panel 部署
---

import DockerArgs from "./slots/docker-args.md"

:::info
在继续操作之前，我们推荐您先阅读[《写在前面》](../prepare)，这可以快速帮助你了解 Ikaros。
:::


## 1panel

> 1Panel 是新一代的 Linux 服务器运维管理面板

- 官网：<https://1panel.cn/>
- 文档：<https://1panel.cn/docs/>

![](https://resource.fit2cloud.com/1panel/img/overview.png)

## 视频

【ikaros】1Panel安装演示 2024-10-12 01-45-38: <https://www.bilibili.com/video/BV1gt2DYSESc/>

## 1panel三方应用商店配置

商店仓库：<https://github.com/okxlin/appstore>

:::tip
因为官方应用商店仓库需要1万star，所以PR被拒绝了，只能提交给三方应用商店；
如果已经配置过则无需配置；
配置前，请先安装好1panel，参考：<https://1panel.cn/docs/>
:::

进入1panel面板，按照下图步骤创建计划任务：
![](/img/getting-started-install-1panel/Snipaste_2024-10-10_17-15-03.png)

脚本内容：

国内网络：
```
wget -P /opt/1panel/resource/apps/local https://ghp.ci/https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip

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

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps

rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

国外网络：
```
wget -P /opt/1panel/resource/apps/local https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip

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

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps

rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

任务名称：自己随便取
执行周期：不理解则按图中配置即可，图中的意思是每天凌晨2点30分钟执行一次
保留份数：不理解则按图中配置即可

配置好后，手动点击执行一次，然后去`应用商店`页面点击`更新应用列表`按钮，然后a按`F5`键刷新网页即可。

## 安装ikaros

这个就简单了，进`应用商店`页面，

搜索PostgreSQL安装，如已经安装则不用安装，安装好后，

搜索ikaros，选中`端口外部访问`，修改`管理员用户名`和`管理员密码`，其它的配置看自己情况修改，然后点击右下角安装即可。

然后浏览器页面输入 `http://{你的服务器ip}:{你配置的端口号}/console` 进入控制台，输入用户名密码登录ikaros控制台。