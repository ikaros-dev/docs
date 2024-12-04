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

## Best Practices

## Overall Steps

1. Move or hard link existing resources to the `links` directory under the `ikaros` application directory in the file system.
2. Start the import plugin from the console and wait for the import to complete.
3. Disable the import plugin from the console.
4. Move or delete the files or directories under the `links` directory in the `ikaros` application directory in the file system.
5. Add items from the console.
6. Bind resources from the console.
7. (Optional) Move the logical directory `links` to the desired directory.

### Video Demonstrations

#### Importing via Hard Links (Recommended)

<https://www.bilibili.com/video/BV1Yw411M7pN/>

<iframe src="//player.bilibili.com/player.html?aid=277979450&bvid=BV1Yw411M7pN&cid=1318107297&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width='100%' height='600px'> </iframe>

#### Importing via Moving

<https://www.bilibili.com/video/BV1te411971w/>

<iframe src="//player.bilibili.com/player.html?aid=235268141&bvid=BV1te411971w&cid=1314866718&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width='100%' height='600px'> </iframe>

### Preparing Resources

#### Importing via Moving

Move files directly via NAS or SSH.

#### Importing via Hard Links (Recommended)

The script used here is from: <https://github.com/appotry/PTtool>

First, enter the SSH backend, go to the parent directory of your resource directory, and create a script called `mklink.sh` with the following content:

``` shell
#!/bin/sh
#auther: andycrusoe@gmail.com
#github:https://github.com/appotry/PTtool#readme

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
    
    tmppth=`dirname $i`
    pth=${tmppth/"$SRC"/"$DST"}
    if [ ! -d $pth ]; then
        echo "mkdir -p $pth"
        mkdir -p $pth

    fi
    
    dstfile=$pth/`basename $i`
    echo "dst file:${dstfile}"
    
    if [ ! -f $dstfile ]; then
      echo "cp -l $i $dstfile"
      cp -l $i $dstfile
    fi
    
    echo "--"

done



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
    
    tmppth=`dirname $i`
    pth=${tmppth/"$SRC"/"$DST"}
    if [ ! -d $pth ]; then
      echo "mkdir -p $pth"
      mkdir -p $pth
    fi
    
    dstfile=$pth/`basename $i`
    echo "dst file:${dstfile}"
    
    if [ ! -f $dstfile ]; then
      echo "cp $i $dstfile"
      cp $i $dstfile
    fi
    
    echo "--"

done

IFS=$SAVEIFS
```
Grant execution permission

``` shell
chmod +x mklink.sh
```

Hard link directory operation

``` shell
./mklink.sh /share/downloads/script/test /share/application/ikaros/links/test
```

- The first path, `/share/downloads/script/test`, is the source directory path. Please note not to add a trailing `/` at the end, as it will ignore the files in the source directory.
- The second path, `/share/application/ikaros/links/test`, is the target directory path. It is recommended to use the same name as your source directory, which is `test` in this case.
