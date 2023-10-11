---
title: Local Files Import Plugin
description: Documentation for the Local Files Import Plugin
---

## GitHub

[https://github.com/ikaros-dev/plugin-local-files-import](https://github.com/ikaros-dev/plugin-local-files-import)

## Introduction

Currently, the solution is to check if there is a `links` directory in the current application working directory when it starts.
If there are files or directories in this directory, after the plugin is started, all files will be imported into the file management of the database.
By default, it is a symbolic link, and if it fails, it will be copied.

It is recommended to move existing resources to this directory, then start the plugin for import, and finally move the existing resources back.
If the symbolic link is successful, it will not occupy additional disk space.
