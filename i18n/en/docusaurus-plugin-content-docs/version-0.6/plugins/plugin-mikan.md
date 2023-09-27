---
title: Mikan Plugin
description: Documentation for the Mikan Plugin
---

## GitHub

[https://github.com/ikaros-dev/plugin-mikan](https://github.com/ikaros-dev/plugin-mikan)

## Mikan

- Official Website: [https://mikanime.tv/](https://mikanime.tv/)

## Configuration

You can configure the RSS feed and Qbittorrent address for Mikan in the backend.

![Ikaros Console Plugin Config](/img/plugins-plugin-mikan/Snipaste_2023-07-30_15-48-14.png)

:::tip
The IP of qBittorrent here is the virtual IP of Docker. This is related to the deployment method. You need to ensure that you can connect to qBittorrent. You can deploy a Portainer and add your qBittorrent container to the network of Ikaros. This way, you will have a virtual IP.
:::

## Functionality

Two scheduled tasks will be started when the plugin is launched:

- Parsing Mikan RSS feed: Every thirty minutes, parse the Mikan RSS feed, add the corresponding torrents to qBittorrent, categorize them as `ikaors`, and label the torrents with the item ID from Bangumi. 
- Import downloaded files and add items: Every five minutes, check if the files in the `ikaors` category of qBittorrent have finished downloading. Import the completed downloads (as symbolic links) into Ikaros' file management, add the corresponding items, and match the item's episodes. If a match is found, an email will be sent to the user. The email address is configured in `Settings` => `Email Configuration` => `Enable Email` => `Recipient Email Address`.

:::tip
You need to enable and configure the SMTP email server to receive emails properly. <br /> The cover URL in your email client should be accessible for the cover images in the email to display correctly.
:::

The email will look something like this:

![Ikaros Subject Update Mail](/img/plugins-plugin-mikan/Snipaste_2023-07-30_16-04-21.png)
