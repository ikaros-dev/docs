---
title: 从零到一安装开源ACGMN媒体管理系统Ikaros
date: 2026-05-17
authors: chivehao
---
# 简述
本文从安装ikaros，到挂载本地目录，再到安装插件拉取条目，然后到绑定条目和附件，最后下载app配置登录。详细介绍了如何从零到一使用ikaros，帮助管理老番随时点开就能看。

# Ikaros介绍

Ikaros [Ίκαρος]，专注于ACGMN的内容管理系统(CMS)。

ACGMN全拼是：Anime(动画) + Comic(漫画) + Game(游戏) + Music(音乐) + Novel(小说)

![](https://imgbed.ikaros.run/file/posts/1778947740866_20260517000857359.png)

当然，目前基本就专注在Anime这块，基本能很好得解决随时随地追老番的acg爱好者痛点。

# 准备宿主机
你可以选择安装到NAS上，我这里是用PVE虚拟化了一台Ubuntu, 专门用于文章演示。

安装好1panel，并登录进1panel的web界面，这步我就不在本文多赘述，请参考：[1panel官方安装文档](https://1panel.cn/docs/v2/installation/online_installation/)

你也可以选择ssh进宿主机里，然后用传统的shell命令安装，都差不多。

# 创建应用目录
在你的宿主机器上，按自己的习惯找一个自己常用并且能记住的应用目录，我这里是`/opt/ikaros`

创建这个目录，并在这个目录下创建`docker-compose.yaml`文件和`.env`文件

![](https://imgbed.ikaros.run/file/posts/1778948563189_20260517002236151.png)

点击`docker-compose.yaml`编辑内容，

内容参考: [使用Docker Compose部署Ikaros](https://docs.ikaros.run/docs/getting-started/install/docker-compose)

![](https://imgbed.ikaros.run/file/posts/1778948746662_20260517002541620.png)

粘贴后保存
![](https://imgbed.ikaros.run/file/posts/1778948795176_20260517002629152.png)

按照下图复制compose文件路径
![](https://imgbed.ikaros.run/file/posts/1778948941760_20260517002852510.png)

# 运行编排
参考[1panel官方的容器编排文档](https://1panel.cn/docs/v2/user_manual/containers/compose/)，在1panel web端，使用上面地址的compose文件，创建编排。

路径是：容器 => 编排 => 创建 => 路径选择 => 粘贴或者输入`docker-compose.yaml`文件路径 => 保存创建 => 查看编排日志等待容器跑起来。
![](https://imgbed.ikaros.run/file/posts/1778949025636_20260517003023021.png)

等待编排任务执行完成，这期间需要拉取docker镜像，速度纯看你的网络情况
![](https://imgbed.ikaros.run/file/posts/1778952026073_20260517012015607.png)

查看ikaros容器的日志，等容器跑起来
![](https://imgbed.ikaros.run/file/posts/1778952325358_20260517012522469.png)

通过 http + ip地址 + :9999/console 进入 ikaros web console, 我这里就是：`http://192.168.9.129:9999/console`

输入用户名`tomoki`和密码`tomoki`登录后台。
![](https://imgbed.ikaros.run/file/posts/1778952473513_20260517012750387.png)

到此，ikaros安装完毕。

# 挂载宿主机的本地目录资源

比如我要把这个目录`/mnt/animes`挂载到ikaros的附件

![](https://imgbed.ikaros.run/file/posts/1778952996281_20260517013628334.png)

从上图可以看出：
- 宿主机文件系统上的路径是：`/mnt/animes`
- 然后里面有一部准备好的动漫：`[SumiSora&CASO][Tenshi_no_3P][01-12][MKV][1080p]`

修改文件`docker-compose.yaml`，需要将已存在的目录挂载到容器目录上，推荐起一样的路径名

比如你本地文件系统里的目录路径是`/mnt/animes`，为了不让自己更迷惑，建议你容器的目录也是一样的`/mnt/animes`

找到`ikaros`，在 `volumes`下方加一行 `- /mnt/animes:/mnt/animes`

![](https://imgbed.ikaros.run/file/posts/1778953158747_20260517013907584.png)

重启容器后，等应用跑起来，然后进入 ikaros web console，路径是`/console`

按照如下路径，进入`附件驱动页`

![](https://imgbed.ikaros.run/file/posts/1778953432119_20260517014349408.png)

点击`附件驱动页`卡片左上方的`新建`按钮

![](https://imgbed.ikaros.run/file/posts/1778953475984_20260517014433206.png)

会进入下图`附件驱动新建页`

![](https://imgbed.ikaros.run/file/posts/1778953523107_20260517014515886.png)

注意：下方都是必填或者必选的项
- 类型：选`LOCAL`, 本地的意思。
- 名称：选`DISK`，磁盘的意思。
- 挂载名称：你可以给这个附件驱动起一个名称，比如`LocalMntAnime`啥的，这个名称就是挂载到ikaros附件系统的逻辑附件目录名称。
- 远端目录: 填上面挂载到容器的目录`/mnt/animes`
- 访问令牌：本地目录挂载不需要填这个
- 刷新令牌：本地目录挂载不需要填这个
- 备注: 非必须，补充对这个附件驱动的说明。

最后点击卡片左下方的`新建`按钮，等待一会儿，页面会自动跳转到`附件驱动列表页`

![](https://imgbed.ikaros.run/file/posts/1778953576971_20260517014614666.png)

默认新创建的附件驱动是`就绪`状态，也就是还没有启用，点击右边`启用`按钮启用

![](https://imgbed.ikaros.run/file/posts/1778953614642_20260517014643919.png)

现在进入`附件列表页`，会发现有一个名为上面配置的`挂载名称`的附件目录，比如我的就是`LocalMntAnime`目录

![](https://imgbed.ikaros.run/file/posts/1778953655064_20260517014727887.png)

鼠标双击目录行，或者右键点击进入，进入目录

进入后会发现目录里什么也没有，这时候需要主动点击上方的刷新按钮获取当前目录的子目录和文件。（ikaros不搞后台被动扫网盘，所有操作都是你主动进行的。）

![](https://imgbed.ikaros.run/file/posts/1778953695766_20260517014807611.png)

点击`刷新`按钮后，等待一会儿，没有报错消息弹出来的话，下面的列表就有目录和文件了。

![](https://imgbed.ikaros.run/file/posts/1778953717135_20260517014831598.png)

同理，该目录下的子目录也是同样的主动刷新逻辑。

需要注意的是，如果子目录和子文件数量多，则需要等待刷新加载的时间也越长。

![](https://imgbed.ikaros.run/file/posts/1778953853712_20260517015050331.png)

进入对应的目录，点刷新，然后再进子目录，点刷新，直到进入目标目录。

该目录下的图片、音频、视频，都可以通过双击行或者右键点击详情，打开附件详情页进行预览。

当你确定你的视频文件可以正常播放后，就可以愉快地在剧集绑定这个视频文件了。

附件详情页预览：

![](https://imgbed.ikaros.run/file/posts/1778953898304_20260517015131208.png)

# 安装番组计划插件

这里为了快速新增，同时也是讲下如何安装插件，这里安装的插件是番组计划插件，能方便的拉取条目。

插件GitHub：<https://github.com/ikaros-dev/plugin-bgmtv>

先进插件GitHub => release => Assets => 点击对应的jar包下载

![](https://imgbed.ikaros.run/file/posts/1778954112367_20260517015506827.png)

回到 ikaros web console, 进入 系统 => 插件 => 点击`安装插件`按钮

![](https://imgbed.ikaros.run/file/posts/1778954177411_20260517015614342.png)

将刚刚下载的jar文件拖拽上传安装

![](https://imgbed.ikaros.run/file/posts/1778954312444_20260517015825983.png)

等待安装完毕页面自动刷新。

安装完毕的插件是处于`就绪`状态
![](https://imgbed.ikaros.run/file/posts/1778954362680_20260517015917437.png)

点击右边的三个点，再点击启动按钮启动插件
![](https://imgbed.ikaros.run/file/posts/1778954431829_20260517020024648.png)

一切正常的话，插件的状态会变成`启动`
![](https://imgbed.ikaros.run/file/posts/1778954500756_20260517020135328.png)

# 新增条目

番组计划：<https://bgm.tv/>

前往番组计划查询资源`[SumiSora&CASO][Tenshi_no_3P][01-12][MKV][1080p]`所对应的条目，

我这里的条目是：[天使の3P!](https://bgm.tv/subject/194261)：<https://bgm.tv/subject/194261>
![](https://imgbed.ikaros.run/file/posts/1778954665071_20260517020417011.png)

这个链接`https://bgm.tv/subject/194261`  后面的这串数字`194261`就是番组计划条目ID，复制这个ID。

回到 ikaros web console, 条目 => 点击`快速添加` => 平台选择`BGM_TV` => ID输入刚复制的`194261` => 点击右下角`同步`按钮

![](https://imgbed.ikaros.run/file/posts/1778954802733_20260517020635666.png)

网络没问题的话，会自动通过插件拉取对应的条目，然后在对应的筛选条件里填入条目信息，展示出来对应的条目

![](https://imgbed.ikaros.run/file/posts/1778954957026_20260517020914790.png)

可以鼠标点击条目卡片，进入条目详情页，查看条目的信息

![](https://imgbed.ikaros.run/file/posts/1778954995525_20260517020948802.png)

到此，快速新增条目完成。

# 条目剧集绑定

在上一步的`条目详情页`里

您可以选择批量绑定，或者手动绑定，更推荐批量绑定，
![](https://imgbed.ikaros.run/file/posts/1778955109160_20260517021138606.png)

批量绑定（推荐）

![](https://imgbed.ikaros.run/file/posts/1778955126289_20260517021157204.png)

手动绑定

![](https://imgbed.ikaros.run/file/posts/1778955140376_20260517021210015.png)

绑定成功后

![](https://imgbed.ikaros.run/file/posts/1778955155655_20260517021227785.png)

条目的剧集和附件资源绑定后就可以用app愉快的补番了。

# App观看
Ikaros App仓库：<https://github.com/ikaros-dev/app>

首先下载app包

进 ikaros app github releases => 点击最新版本 => Assert => 安装包(安卓是apk，IOS是ipa后缀)。
![](https://imgbed.ikaros.run/file/posts/1778955270516_20260517021428439.png)

下载你平台包解压，我这里以Windows为例子

![](https://imgbed.ikaros.run/file/posts/1778955697908_20260517022129486.png)

解压出来，放到你记得住的目录，然后点击目录，双击`ikaros.exe`运行

![](https://imgbed.ikaros.run/file/posts/1778955780926_20260517022252566.png)

默认是进入了登录页面，输入网站的URL，和用户名密码登录。
![](https://imgbed.ikaros.run/file/posts/1778955853377_20260517022407655.png)

登录后是在`收藏`页，这页显示您的条目收藏
![](https://imgbed.ikaros.run/file/posts/1778955914768_20260517022508917.png)

我们点击`条目`进入条目页，这里有我们添加好的条目
![](https://imgbed.ikaros.run/file/posts/1778955953571_20260517022546507.png)

左边的收藏按钮可以进行收藏，下方的两栏目是条目的信息
![](https://imgbed.ikaros.run/file/posts/1778956020104_20260517022653223.png)

点击右边的按钮进入剧集播放页，可以愉快的补番了。

![](https://imgbed.ikaros.run/file/posts/1778956140425_20260517022848214.png)

在`我的`页 => 点击 `历史纪录`按钮，可以进入 `历史纪录` 页面

![](https://imgbed.ikaros.run/file/posts/1778956265625_20260517023102183.png)

从历史纪录点击，可以快速跳转到对应条目对应剧集的对应时间点。