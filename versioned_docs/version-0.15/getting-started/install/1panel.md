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

待三方商店那边PR合并后录制

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
wget -P /opt/1panel/resource/apps/local https://ghp.ikaros.run/https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps

rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

国外网络：
```
wget -P /opt/1panel/resource/apps/local https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip

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

搜索ikaros，选中开放端口外部访问，其它的配置看自己情况修改，然后点击右下角安装即可。

点击应用的日志，复制初次生成的用户名密码，

然后浏览器页面输入 `http://{你的服务器ip}:9999/console` 进入控制台，登录页面输入用户名`tomoki`，密码即从日志复制的密码，登录ikaros控制台。