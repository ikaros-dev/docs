---
title: Deploying with Fast Jar
description: Deploying with Fast Jar
---

You need to have a `Java 17` runtime environment installed.

Go to the `Assets` section of the GitHub `Release` page to download the JAR file: [https://github.com/ikaros-dev/ikaros/releases](https://github.com/ikaros-dev/ikaros/releases)

To build the Fast Jar, run the following command in the project's root directory:

```shell
# linux
./gradlew clean bootJar -x test
# windows
./gradlew.bat clean bootJar -x test
```

The packaged file will be located in the server/build/libs/ directory.

In the directory where the packaged file is located, run the following command in Linux:

```shell
java -jar ./ikaros-server.jar
```

In the directory where the packaged file is located, for running on Windows, you'll need to add the additional parameter `--spring.profiles.active=win`:

```shell
java -jar ikaros-server.jar --spring.profiles.active=win 
```