# 强制删除运行的容器
docker rm -f hanhan-note

# 休息一秒钟
sleep 1s

# 强制删除镜像
docker rmi -f hanhan-note

# 构建镜像
docker build -t hanhan-note .

# 运行镜像
docker run -itd -p 5001:80 --name hanhan-note hanhan-note

# 返回上一层
cd ..

# 删除文件
rm -rf han-note