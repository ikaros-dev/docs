---
title: 常见问题
description: 使用上的常见问题
---

### Ikaros 是什么？

**Ikaros** [Ίκαρος]，专注于ACGMN的个人内容管家(CMS)，用于方便管理您的ACGMN内容的助手。

### 如何导入已经存在的资源

对于已经存在的资源文件，可以借助本地导入插件
关于资源导入，可以先按照以下步骤来

1. 安装本地导入插件并启动
2. 进nas的web控制台文件管理，将你已经存在的资源，移动到ikaros的links目录
3. 进ikaros后台，停止本地导入插件，再启动，这里会卡一段时间，因为ikaros在将links目录里的文件全部导入文件管理，默认是软链接，软链接失败会复制
4 过段时间，等ikaros后台能正常访问了，代表导入结束了，能在ikaros后台看到对应的文件
5 进nas控制台文件管理，将links目录文件移动会原来的位置。

资源导入结束，后续是：
6. ikaros后台添加对应条目
7. 进入条目详情进行资源绑定
