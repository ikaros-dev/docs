---
title: 本地导入插件
description: 本地导入插件说明
---

## GitHub

<https://github.com/ikaros-dev/plugin-local-files-import>

## 介绍

目前的方案是，启动的时候，检查当前应用工作目录下，是否有 `links` 目录存在，
如果该目录下存在文件或者目录， 在当前插件启动后，会将所有文件导入到数据库的文件管理中，
默认是[硬链接](https://en.wikipedia.org/wiki/Hard_link)，失败了会进行复制。

推荐将已有资源移动到这个目录，然后启动插件进行导入，最后再把已有资源移动回去；如果软连接成功并不会多占用磁盘空间。

## 最佳实践


## 总体步骤

1. 通过移动或者硬链接的方式，将已经存在的资源，移动至文件系统的`ikaros`应用目录下的`links`目录
2. 控制台启动导入插件，等待导入完成
3. 控制台禁用导入插件
4. 移动或者删除文件系统的`ikaros`应用目录下的`links`目录的文件或者目录
5. 控制台添加条目
6. 控制台绑定资源
7. （可选）控制台将逻辑目录`links`的目录移动到自己想要移动的逻辑目录 

### 视频演示

#### 硬链接方式导入（推荐）

<https://www.bilibili.com/video/BV1Yw411M7pN/>

<iframe src="//player.bilibili.com/player.html?aid=277979450&bvid=BV1Yw411M7pN&cid=1318107297&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width='100%' height='600px'> </iframe>


#### 移动方式导入

<https://www.bilibili.com/video/BV1te411971w/>

<iframe src="//player.bilibili.com/player.html?aid=235268141&bvid=BV1te411971w&cid=1314866718&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width='100%' height='600px'> </iframe>

### 准备资源

#### 移动方式导入

直接通过NAS或者进入SSH进行文件移动操作

#### 硬链接方式导入（推荐）

这里使用的脚本来自：<https://github.com/appotry/PTtool>

首先进入SSH后台，进入和你资源目录的父级目录，新建一个脚本`mklink.sh`，内容如下:

``` shell
#!/bin/sh
#auther: andycrusoe@gmail.com
#使用说明:https://github.com/appotry/PTtool#readme
#结合du -b可以得到性能更快更好的版本，目前这个可用，先这样了


#查找文件硬链接
#ls -ialh file.txt
#find . -inum 1234

SRC="/share/Download/tmp/src"
DST="/share/Download/tmp/dst"

FILEGIG=1000000c

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

function servicectl_usage(){
  echo "Usage:mklink.sh sourcedir dstdir"
  return 1 
}

function servicectl(){
[[ -z $1 || -z $2 ]] && servicectl_usage
}

if [ $# -eq 2 ]; then
    SRC=$1
    DST=$2
    echo "User set:"
    echo "src:$SRC"
    echo "dst:$DST"
else
    servicectl_usage
    echo "use default set:"
    echo "源目录src:$SRC"
    echo "目的目录dst:$DST"
    exit -1
fi

#查找大于1M的文件，硬链接
for i in `find $SRC -size +$FILEGIG`
do

    echo "work:$i"

    if [ -d $i ]; then
        echo "跳过处理目录1:$i"
        echo "--"
        continue
        else if [ -e $i ]; then
        echo "src file:$i"
        fi
    fi
    
    #判断目录是否已经存在
    tmppth=`dirname $i`
    pth=${tmppth/"$SRC"/"$DST"}
    if [ ! -d $pth ]; then
        echo "mkdir -p $pth"
        mkdir -p $pth
    #else
    #    echo "跳过处理目录2:$i"
    #    echo "--"
    #    continue
    fi
    
    dstfile=$pth/`basename $i`
    echo "dst file:${dstfile}"
    
    #判断文件是否已经存在
    #不存在才复制
    if [ ! -f $dstfile ]; then
      echo "cp -l $i $dstfile"
      cp -l $i $dstfile
    fi
    
    echo "--"

done



#查找小于1M的文件，复制小于1m的文件
for i in `find $SRC -size -$FILEGIG`
do

    echo "work:$i"

    if [ -d $i ]; then
        echo "跳过处理目录3:$i"
        echo "--"
        continue
        else if [ -e $i ]; then
        echo "src file:$i"
        fi
    fi
    
    #判断目录是否已经存在
    tmppth=`dirname $i`
    pth=${tmppth/"$SRC"/"$DST"}
    if [ ! -d $pth ]; then
      echo "mkdir -p $pth"
      mkdir -p $pth
    fi
    
    dstfile=$pth/`basename $i`
    echo "dst file:${dstfile}"
    
    #判断文件是否已经存在
    #不存在才复制
    if [ ! -f $dstfile ]; then
      echo "cp $i $dstfile"
      cp $i $dstfile
    fi
    
    echo "--"

done

IFS=$SAVEIFS
```

赋予执行权限

``` shell
chmod +x mklink.sh
```

硬链接目录操作

``` shell
./mklink.sh /share/downloads/script/test /share/application/ikaros/links/test
```

- 前面`/share/downloads/script/test`是源目录路径，注意后面不能加`/`，否则会忽略源目录下的文件
- 后面`/share/application/ikaros/links/test`是目标目录路径，这里的`test`建议和您源目录名称相同
