---
title: 115网盘插件
description: 提供将115网盘目录挂载为附件目录并读取视频播放流的功能。
---

## 插件介绍
提供将115网盘目录挂载为附件目录并读取视频播放流的功能。

GitHub: <https://github.com/ikaros-dev/plugin-pan115>

## 115网盘介绍

这是个大容量网盘，使用体验还不错。

- 官网：<https://115.com/>


## 功能

### 已实现

- 目录挂载成逻辑附件目录，主动刷新读取文件pc码
- 实现了视频文件的流式播放接口

### 待实现

- 挂载的附件目录的删除


## 操作指南

去`GitHub`仓库`release`的`asserts`下下载插件的jar包，进web console的`插件页`安装并启动

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-12-22.png)

按照如下路径，进入`附件驱动页`

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-14-19.png)

点击`附件驱动页`卡片左上方的`新建`按钮，会进入下图`附件驱动新建页`

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-22-30.png)

注意：下方都是必填或者必选的项
- 类型：`CUSTOM`, 自定义的意思，由插件实现的附件驱动都是这个类型。
- 名称：如果你的pan115插件正常启动了，这边会有个可选的值为`PAN115`，选这个`PAN115`，如果插件没安装或者没正常启动，这边则不会有`PAN115`这个值。
- 挂载名称：你可以给这个附件驱动起一个名称，比如`115`啥的，这个名称就是挂载到ikaros附件系统的逻辑附件目录名称。
- 远端目录: 填`0`就行
- 访问令牌：access_token，这个如果不会用接口弄的话，建议去使用openlist的公益服务获取你115网盘的令牌。
- 刷新令牌：refresh_token，这个如果不会用接口弄的话，建议去使用openlist的公益服务获取你115网盘的令牌。
- 备注: 非必须，补充对这个附件驱动的说明。

有关令牌获取：openlist的公益服务：<https://api.oplist.org/>

浏览器进入这个网址<https://api.oplist.org/>，按照下图申请自己的令牌

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-33-58.png)

点击`获取Token`按钮后，最好别重复点击，点一次就行，耐心等几秒，慢是正常现象，一般要3~5秒左右

由于115令牌申请的域名和网页登录的域名不同，跳转到115应该会让你重新登录115网盘，登录授权就行。

授权完成后等待网页自动跳转，跳转回<https://api.oplist.org/>后，下方的`访问令牌（Access Token）`和`刷新令牌（Refresh Token）`会都有值

建议你把两个令牌复制自己保存好。

令牌拿到了，现在回到ikaros web console的`附件驱动新建页`，填入访问令牌和刷新令牌，

最后点击卡片左下方的`新建`按钮，等待一会儿，页面会自动跳转到`附件驱动列表页`

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-43-46.png)

默认新创建的附件驱动是`就绪`状态，也就是还没有启用，点击右边`启用`按钮启用

现在进入`附件列表页`，会发现有一个名为上面配置的`挂载名称`的附件目录，比如我的就是`115`目录

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-47-01.png)

鼠标双击目录行，或者右键点击进入，进入目录

进入后会发现目录里什么也没有，这时候需要主动点击上方的刷新按钮获取当前目录的子目录和文件。（ikaros不搞后台被动扫网盘，所有操作都是你主动进行的。）

点击`刷新`按钮后，等待一会儿，没有报错消息弹出来的话，下面的列表就有目录和文件了。
![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-50-29.png)

同理，该目录下的子目录也是同样的主动刷新逻辑。

进入对应的目录，点刷新，然后再进子目录，点刷新，直到进入目标目录。

该目录下的图片、音频、视频，都可以通过双击行或者右键点击详情，打开附件详情页进行预览。

当你确定你的视频文件可以正常播放后，就可以愉快地在剧集绑定这个视频文件了。

附件详情页预览：

![Ikaros Console Plugin Config](/img/plugins-plugin-pan115/Snipaste_2026-05-16_15-57-17.png)

注意：这种挂载的附件目录，对目录里的子目录删除或者文件删除、文件命名等操作，都不会影响远端的文件，你下次点刷新，还会有一个原来一模一样的附件冒出来。还有就是不支持在这种挂载的目录上传文件。