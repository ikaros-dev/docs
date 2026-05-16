---
title: 附件驱动
description: 附件驱动管理相关功能说明
---

## 说明

- 附件驱动目前已经支持挂载本地目录，其它类型的驱动目前就一个115网盘的。
- 驱动新建后默认是禁用的，需要手动启用
- 驱动启用后，需进入对应挂载的附件目录刷新下获取最新的目录和文件数据

## 页面入口

从`附件`页的上方`驱动`按钮跳转

## 宿主文件目录挂载到附件系统目录的步骤

比如我要把这个目录挂载到ikaros的附件

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_16-56-29.png)

从上图可以看出：
- 宿主机文件系统上的路径是：`/mnt/animes`
- 然后里面有一部准备好的动漫：`[SumiSora&CASO][Tenshi_no_3P][01-12][MKV][1080p]`

你`Docker`部署容器的时候，需要将已存在的目录挂载到容器目录上，推荐起一样的路径名，

比如你本地文件系统里的目录路径是`/mnt/animes`，为了不让自己更迷惑，建议你容器的目录也是一样的`/mnt/animes`。

- `docker run` 方式部署的话就是，加上 `-v /mnt/animes:/mnt/animes`
- `docker compose` 方式部署的话就是，在 `volumes`下方加一行 `- /mnt/animes:/mnt/animes`


重启容器后，等应用跑起来，然后进入 ikaros web console，路径是`/console`

按照如下路径，进入`附件驱动页`

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_15-14-19.png)

点击`附件驱动页`卡片左上方的`新建`按钮，会进入下图`附件驱动新建页`

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_15-22-30.png)

注意：下方都是必填或者必选的项
- 类型：选`LOCAL`, 本地的意思。
- 名称：选`DISK`，磁盘的意思。
- 挂载名称：你可以给这个附件驱动起一个名称，比如`LocalMntAnime`啥的，这个名称就是挂载到ikaros附件系统的逻辑附件目录名称。
- 远端目录: 填上面挂载到容器的目录`/mnt/animes`
- 访问令牌：本地目录挂载不需要填这个
- 刷新令牌：本地目录挂载不需要填这个
- 备注: 非必须，补充对这个附件驱动的说明。

最后点击卡片左下方的`新建`按钮，等待一会儿，页面会自动跳转到`附件驱动列表页`

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_17-03-46.png)

默认新创建的附件驱动是`就绪`状态，也就是还没有启用，点击右边`启用`按钮启用

现在进入`附件列表页`，会发现有一个名为上面配置的`挂载名称`的附件目录，比如我的就是`LocalMntAnime`目录

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_17-04-40.png)

鼠标双击目录行，或者右键点击进入，进入目录

进入后会发现目录里什么也没有，这时候需要主动点击上方的刷新按钮获取当前目录的子目录和文件。（ikaros不搞后台被动扫网盘，所有操作都是你主动进行的。）

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_17-05-36.png)


点击`刷新`按钮后，等待一会儿，没有报错消息弹出来的话，下面的列表就有目录和文件了。


![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_17-06-45.png)

同理，该目录下的子目录也是同样的主动刷新逻辑。

![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_17-08-14.png)

进入对应的目录，点刷新，然后再进子目录，点刷新，直到进入目标目录。

该目录下的图片、音频、视频，都可以通过双击行或者右键点击详情，打开附件详情页进行预览。

当你确定你的视频文件可以正常播放后，就可以愉快地在剧集绑定这个视频文件了。

附件详情页预览：


![Ikaros Console Plugin Config](/img/user-guide-attachments-drivers/Snipaste_2026-05-16_17-09-17.png)




