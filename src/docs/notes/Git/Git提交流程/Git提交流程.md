# Git提交流程

> 本地项目上传到远程仓库


### 一、初始化本地Git仓库

```shell
git init
```

### 二、添加本地文件至本地仓库

```shell
git add .
```

### 三、提交代码

```shell
git commit -m "说明"
```

### 四、新建分支,团队的话不要使用默认的主分支

#### 1.查看所有分支(包括远程和本地分支)

```shell
git branch -a
```

#### 2.查看本地分支

```shell
git branch 分支名
```

#### 3.查看远程分支

```shell
git branch -r 分支名 
```

#### 4.新建一个本地分支

```shell
git branch 分支名
```

#### 5、切换分支(默认是在master分支)

```
git checkout 分支名
```

### 五、添加远程仓库  *

```shell
git remote add <别名> <远程地址>
```

### 六、拉取仓库

```shell
git fetch 远程仓库名 远程的分支名:本地分支名
```

### 七、检查代码冲突

```shell
git diff  本地分支名
```

### 八、合并分支

```shell
git merge 本地分支名
```

### 九、提交代码  *

#### 1.方式一

```shell
git push origin master
```

#### 2.方式二

```shell
git push 远程地址
```

### 十、查看提交日志

```shell
git log --oneline
```

### 十一、版本回退

```shell
git reset --hard 版本号
```
