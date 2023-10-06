---
title: Deploying with Fast Jar
description: Deploying with Fast Jar
---

import DockerArgs from "./slots/docker-args.md"

You need to have a `Java 17` runtime environment installed.

Go to the `Assets` section of the GitHub `Release` page to download the JAR file: [https://github.com/ikaros-dev/ikaros/releases](https://github.com/ikaros-dev/ikaros/releases)

Run the following command in Linux:

```shell
java -jar ./ikaros-server.jar
```

In the directory where the packaged file is located, for running on Windows, you'll need to add the additional parameter `--spring.profiles.active=win`:

```shell
java -jar ikaros-server.jar --spring.profiles.active=win 
```

Parameter Details:

  <DockerArgs />