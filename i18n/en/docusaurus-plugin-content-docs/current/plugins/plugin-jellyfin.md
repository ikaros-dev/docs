---
title: Jellyfin Plugin
description: Documentation for the Jellyfin Plugin
---

## GitHub

[https://github.com/ikaros-dev/plugin-jellyfin](https://github.com/ikaros-dev/plugin-jellyfin)

## Jellyfin

- Official Website: [https://jellyfin.org/](https://jellyfin.org/)

## Task for Generating Subject Directories

After this plugin is started, it will execute a task to generate subject directories every 15 minutes.

This task will generate two directories under the `jellyfin` directory in the application directory based on the database entry data:

- `normal` directory: This directory contains directories generated for entries that are not marked as `NSFW`.
- `nsfw` directory: This directory contains directories generated for entries that are marked as `NSFW`.

The name format of a single subject directory is: `Chinese Name of Subject + '-' + Original Name of Subject + '(' + yyyy-MM-hh + ')'`, for example, `K-On! - けいおん！ (2009-04-02)`.

In a single subject directory, a `poster.jpg` (soft link) and a `tvshow.nfo` file will be generated.

If the subject's episodes are bound to resources, the corresponding episode files (soft links) will be generated. The episode file names are the names of the resource files.

If a file with the corresponding name can be found in the database, with the suffix `.ass` (it does not need to be in the same directory managed by Ikaros), the corresponding subtitle file (soft link) will be generated.

The generated files in the last subject directory are roughly as shown in the following image:

![Ikaros Generate Jellyfin Subject Files](/img/plugins-plugin-jellyfin/Snipaste_2023-07-30_15-28-48.png)

## How to Use the Generated Directories

Add this directory to the mounting directory of the Jellyfin container, and then add a library in the backend.

You can choose to mount either the `normal` or `nsfw` directory.

For content type, select `TV shows`.

:::tip
It is recommended to leave all metadata downloaders unchecked! If you really want to check, please install the Bangumi Plugin for Jellyfin, and check Bangumi. It is not recommended to check anything else.
:::

After making some other settings, you can save them.
