---
title: Basic Explanation
description: Basic concepts in Ikaros
---

Ikaros, as a powerful ACGMN content manager, coupled with various templates and plugins, can help you effectively manage your content.

To make the most of Ikaros, there are some basic concepts you need to understand.

## Console

The console is the backend management system of an Ikaros site, and only logged-in users with appropriate permissions can use the console's functions. You can use the console to manage various content such as files, entries, plugins, and adjust various settings used by the site.

:::info
The entrance to the console is `/console`.
:::

![Ikaros Console](/img/user-guide-common/Snipaste_2023-07-30_13-15-30.png)

## Metadata

The collection of information or descriptions of elements.

## Files

Uploaded by users, files referenced by various places such as episodes, are also your resource files, stored in the `files` directory under the [working directory](../getting-started/prepare).

## Episodes

An episode is a file element with metadata, containing both data and files. The data is stored in the database, and the files are stored in the `files` directory under the [working directory](../getting-started/prepare).

## Entries

An entry is one of the core concepts in Ikaros. An entry is the basic unit for managing your content, including multiple episodes and metadata of the entry. This concept originates from [Bangumi Project](https://bgm.tv/).

## Plugins

Software packages used to extend the functionality of Ikaros. Plugins are independent of the core Ikaros application and can be installed, upgraded, and uninstalled separately.

:::info
You can find plugins here: Awesome Ikaros: <https://github.com/ikaros-dev/awesome>
:::

### Version Compatibility Rules

The major and minor versions of the plugin should be the same as the core. For example, a 0.3.z plugin requires a core version of 0.3.x to work properly.

The z can be different, only the latest (highest z) is required.

- Plugin 0.3.z can only work properly on Core 0.3.x
- Plugins 0.2.z or 0.4.z cannot work properly on Core 0.3.x
- Plugin 0.3.z cannot work properly on Core 0.2.x or 0.4.x
