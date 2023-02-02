# 使用Docker搭建Minio存储服务器

## 简介

> Minio 是一个基于Apache License v2.0开源协议的对象存储服务，虽然轻量，却拥有着不错的性能。它兼容亚马逊S3云存储服务接口，非常适合于存储大容量非结构化的数据。
> 例如图片、视频、日志文件、备份数据和容器/虚拟机镜像等，而一个对象文件可以是任意大小，从几 kb 到最大 5T 不等。

## 安装

### 1.寻找Minio镜像

> [!tip]
> DockerHub ：[DockerHub]("https://hub.docker.com/")

### 2.下载Minio镜像
| 命令                                                         | 描述                                                         |
|------------------------------------------------------------|------------------------------------------------------------|
| docker pull minio/minio                                    | 下载最新版Minio镜像 (其实此命令就等同于 : docker pull minio/minio:latest ) |
| ddocker pull minio/minio:RELEASE.2022-06-20T23-13-45Z.fips | 下载指定版本的Minio镜像 (xxx指具体版本号)                                 |

### 3.创建目录

> [!tip]
> 一个用来存放配置，一个用来存储上传文件的目录
> - 启动前需要先创建Minio外部挂载的配置文件（ /home/minio/config）
> - 存储上传文件的目录（ /home/minio/data）
```shell
mkdir -p /home/minio/config
mkdir -p /home/minio/data

```

### 4. 创建Minio容器并运行
>[!tip]
> 9090端口指的是minio的客户端端口
> 9000端口是minioAPi端口
> - MINIO_ACCESS_KEY ：账号
> - MINIO_SECRET_KEY ：密码（账号长度必须大于等于5，密码长度必须大于等于8位）

#### 多行模式
```shell
docker run -p 9000:9000 -p 9090:9090 \
  --name minio \
  -d --restart=always \
  -e "MINIO_ACCESS_KEY=minioadmin" \
  -e "MINIO_SECRET_KEY=minioadmin" \
  -v /home/minio/data:/data \
  -v /home/minio/config:/root/.minio \
  minio/minio server \
  /data --console-address ":9090" -address ":9000"
```
#### 单行模式

```shell
docker run -p 9000:9000 -p 9090:9090  --net=host   --name minio  -d --restart=always   -e "MINIO_ACCESS_KEY=minioadmin"  -e "MINIO_SECRET_KEY=minioadmin"  -v /home/minio/data:/data    -v /home/minio/config:/root/.minio   minio/minio server  /data --console-address ":9090" -address ":9000"
```

### 5.访问Minio
访问：http://192.168.124.132:9090/login 用户名：密码  minioadmin：minioadmin

