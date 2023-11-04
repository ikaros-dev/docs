---
title: Deploying with Docker
description: Deploying with Docker
---

import DockerArgs from "./slots/docker-args.md"

:::info
Before proceeding, we recommend reading [Introduction](../prepare), which can quickly help you understand Ikaros.
:::

:::tip
This document only provides a way to run Docker with the default H2 database, mainly for experience and testing. We do not recommend using the H2 database in a production environment.

If you need to deploy with another database, we recommend using Docker Compose: [Deploying with Docker Compose](./docker-compose)
:::

## Setting Up the Environment

- Docker Installation Guide: <https://docs.docker.com/engine/install/>

:::tip
We recommend installing Docker following the official Docker documentation, as the Docker version in the software repositories of some Linux distributions may be outdated.
:::

## Using Docker Image

Available Docker images for Ikaros:

- [ikarosrun/ikaros](https://hub.docker.com/r/ikarosrun/ikaros)

:::info Note
Currently, Ikaros has not updated the Docker image with the `latest` tag, mainly because no official version has been released yet. We recommend using specific version tags, such as `ikarosrun/ikaros:v0.11.5`.

- `ikarosrun/ikaros:v0.11.5`: Represents the latest available image. A new image is built for each release based on GitHub tags.
- `ikarosrun/ikaros:dev`: Represents the image in development. It is not recommended for use, as it is rebuilt and overwritten with each merged Pull Request into the main branch.

Subsequent documentation will use `ikarosrun/ikaros:v0.11.5` as an example.
:::

1. Create a Container

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

    :::info
    Note: This command uses the built-in H2 Database by default. If you want to use PostgreSQL, please refer to: [Deploying with Docker Compose](./docker-compose)
    :::

    - **-it**: Enables input and connects to a pseudo-terminal.
    - **-d**: Runs the container in the background.
    - **--name**: Specifies a name for the container.
    - **-p**: Port mapping, in the format of `host_port:container_port`.
    - **-v**: Maps the working directory, in the form of `-v host_path:/root/.ikaros`, where the latter cannot be modified.

    Parameter Details:


    <DockerArgs />

1. Access the Ikaros management page by visiting `/console` in your browser. The username and password are the ones set in the startup parameters as `master-username` and `master-password`.

    :::tip
    If not started with these parameters, the default username is `tomoki`, and the password will be printed in the logs (printed only on the first run).
    :::

## Upgrade Version

1. Pull the new version image (please choose the latest tag and replace `v0.11.5` below)

  ```bash
  docker pull ikarosrun/ikaros:v0.11.5
  ```

2. Stop the running container

  ```bash
  docker stop ikaros
  docker rm ikaros
  ```

3. Backup Data (Important)

  ```bash
  cp -r ~/.ikaros ~/ikaros.archive
  ```

  > It's worth noting that the `ikaros.archive` filename doesn't necessarily have to follow the naming convention in this document. This is just an example.

4. Update Ikaros

   After modifying the version number, recreate the container following the initial installation method.

    ```bash {6}
    docker run \
        -it -d \
        --name ikaros \
        -p 9999:9999 \
        -v ~/.ikaros:/root/.ikaros \
        ikarosrun/ikaros:v0.11.5 \
        --ikaros.security.initializer.master-username=tomoki \
        --ikaros.security.initializer.master-password=tomoki
    ```
