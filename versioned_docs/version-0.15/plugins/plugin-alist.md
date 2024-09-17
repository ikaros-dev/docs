---
title: AList插件
description: AList插件说明
---

# AList介绍

> 🗂️ 一个支持多种存储的文件列表程序，使用 Gin 和 Solidjs。

官网：<https://alist.nn.ci>

GitHub: <https://github.com/alist-org/alist>

# 插件介绍

导入转化alist的文件成ikaros的附件。

# 操作指南

1. 去GitHub仓库release的asserts下下载alist插件的jar包，安装并启动。启动后会发现左边菜单栏多了个AList页面。
2. 先进插件详情页，然后点击基本配置，输入您部署的alist的地址，格式：`http(s)://alist.domain.com`、用户名和密码，然后保存。
3. 进入你的alist实例，进入要导入的目录，然后复制浏览器路径，到ikaros console 的 AList页面 上的 输入框内
4. 点击提交，提交按钮会提示正在处理中，等待处理完成，会有个弹窗告知，期间不要做任何操作。此处耗时视您输入的alist目录下的文件数量而定，数量越多越耗时，如果提示响应超时，不用担心，服务器有正常在处理。

# 注意事项

- alist的存储，最好是配置成`本地代理`，防止CORS跨域问题。

# 温馨提示

- 导入时，可以从alist的对应目录的浏览器复制链接，插件会根据你在插件配置的baseUrl自动去掉前缀获取目录的路径
- 如果文件数量比较多，会发现点击`提交导入`按钮，一段时间后，不会弹出来导入成功的提示，你需要去配置web服务器，将请求超时时间配置的长一点
- 提交时，对于同一路径，可以多次`提交导入`，已经导入的会自动跳过，直到浏览器弹出来导入完成，才代表你的目录所有文件都导入完成
- 如果导入后发现目录里没有附件，则需要去插件页将alist插件重载下，并启动插件
