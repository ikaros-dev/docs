---
title: 使用 Fast Jar 部署
description: 使用 Fast Jar 部署
---

import DockerArgs from "./slots/docker-args.md"

需要有`Java17`的运行环境

去`GitHub`的`Release`页`Assets`处下载`jar`包: <https://github.com/ikaros-dev/ikaros/releases>


打`Fast Jar`包，在项目根目录运行下方命令
```shell
# linux
./gradlew clean bootJar -x test
# windows
./gradlew.bat clean bootJar -x test
```
打包后的文件在`server/build/libs/`目录下

在打包文件所在目录，`Linux` 运行
```shell
java -jar ./ikaros-server.jar
```

在打包文件所在目录，`Windwos` 运行，
需要加上额外参数`--spring.profiles.active=win`
```shell
java -jar ikaros-server.jar --spring.profiles.active=win 
```

参数详解：

  <DockerArgs />