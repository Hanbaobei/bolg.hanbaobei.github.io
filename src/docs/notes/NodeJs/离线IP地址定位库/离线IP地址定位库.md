# Ip2region 是什么
> [!tip]
>ip2region v2.0 - 是一个离线IP地址定位库和IP定位数据管理框架，10微秒级别的查询效率，提供了众多主流编程语言的 xdb 数据生成和查询客户端实现。v1.0 旧版本: v1.0版本入口
# 使用
## 1.安装
```shell
yarn add node-ip2region
```
## 2.使用
```js
const searcher=require("node-ip2region").create()
console.log(searcher.btreeSearchSync('117.22.55.1'));
```