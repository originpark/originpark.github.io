# hello,git



## 版本控制工具

版本控制工具分为集中式和分布式

集中式: 中央服务器,所有人从中央服务器获取和上传代码,缺点是当中央服务器的单点故障时,代码无法被提交

分布式: 与集中式的区别在于, 除了中央服务器外, 每个人在自己的机器上维护一个本地服务器, 本地服务器与中央服务器同步,这样即使中央服务器出现故障, 仍然可以在本地进行版本控制

**git为分布式版本控制工具**



## git工作机制

- **工作区** 项目在本地磁盘上的位置

- **暂存区** 通过`git add`命令将工作区项目添加到暂存区
- **本地库** 通过`git commit`命令将暂存区项目提交到本地库,生成历史版本
- **远程库**(代码托管中心) 通过`git push`命令将本地库项目推送到远程库
  - 局域网远程库
    - GitLab
  - 互联网远程库
    - GitHub
    - Gitee



# 常用命令

![image-20230405163400253](assets/image-20230405163400253.png)

## 用户签名

设置用户签名和邮箱(必须配置,只代表本地)

```
git config --global user.name origin
git config --global user.email 1223003136@qq.com
```



## 初始化本地库

在项目根目录下执行已下命令,生成.git文件

```shell
git init
```



## 查看本地库状态

```shell
git status
```



## 添加暂存区

将工作区中的文件添加至暂存区

```
git add Hello.txt
```

暂存区的文件可以被删除

```
git rm --cache Hello.txt
```



## 提交本地库

将暂存区的文件提交到本地库,-m后指定日志信息

```
git commit -m "first commit" Hello.txt
```



## 历史版本

查看历史版本

```
git reflog 查看版本信息
git log 查看版本详细信息
```



版本穿梭,参数为版本号

```
git reset --hard af139a4
```





# 分支



## 查看分支

查看分支,-v查看版本

```
git branch -v
```



## 添加分支

新增hot-fix分支

```
git branch hot-fix
```



## 切换分支

切换到hot-fix分支

```
git checkout hot-fix
```



## 分支合并

将hot-fix分支合并到当前分支中

```
git merge hot-fix
```



## 冲突合并

合并分支时,如果两个分支对同一个文件同时做了修改,那么git就无法确定到底使用哪个分支的修改,此时就会进入合并中状态`(master|MERGING)`

我们需要在合并中状态下进入有冲突的文件,修改文件内容并add,commit,即可完成合并

注意: 合并中状态下使用commit命令无需指定文件名





# github



## 远程库别名

给远程库创建别名`git-demo` 链接为github远程库链接

```
git remote add git-demo https://github.com/Wild-Hearts/git-demo.git
```



## 推送远程库

将本地库项目的master分支推送到别名为git-demo的远程库

```
git push git-demo master 
```



## 拉取远程库到本地

拉取别名为git-demo的远程库的master分支上的项目到本地库中

```
git pull git-demo master
```



## 克隆

克隆会做如下操作:拉取代码,初始化本地库,创建别名

```
git clone https://github.com/Wild-Hearts/git-demo.git
```



