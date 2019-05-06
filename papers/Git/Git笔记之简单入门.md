> 我所在的公司曾经长期使用SVN，SVN足够优秀但过于传统且多人合作效率很低。后来大佬们忍受不了低效的开发效率，在内网搭建了git服务器。Git无疑是现在最流行的版本控制系统，在全面推广使用git之后，大家开发都是：）的，少了很多不必要的麻烦和冲突。    
> 刚开始学习Git的时候，上网搜了很多教程发现介绍的都很复杂且晦涩（当然肯定有很多优秀的git入门教程，可能是我没有找到:( ），后来在自己琢磨下才慢慢的上手。因此，本文将会是一个简单的git入门教程。

## 1.下载安装git
> Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目（Git官网）。  
   
- 因为Git是免费开源的，我们可以从git官网免费下载各个平台的Git客户端。具体见[Git官网](https://git-scm.com/)。    
- 官网主要提供了两种Git客户端的下载，一种是binary release，安装了之后只能通过命令行进行git操作（推荐这种方式进行安装，相信我命令行并不难）；另一种是GUI客户端，安装了之后既可以使用命令行进行git操作，也可以使用GUI客户端方便的进行git操作。对于效率优先的程序员来讲，推荐使用命令行进行操作，毕竟GUI意味着耗时更多。
- 安装的过程不必多讲，一直点下一步就行了。

## 2.注册用户名密码
- 我们可以依托GitHub进行git账号的注册，登入[GitHub官网](https://github.com)。
- 点击signup进行账号的注册，记住你注册时的用户名、邮箱以及密码。如果忘了，在GitHub网站上点击右上角的头像，在下拉列表点击settings，在你的Public profile找到注册的name和public email。
![setting](https://wangdunwen.github.io/static/images/git_setting.png)

## 3.配置git
- 打开命令行，mac或linux打开终端，windows打开cmd或者git bash。
- 输入git version，如果能够看到git版本号，那么git安装成功。

```shell
~ git version
```
- 查询本地配置，不出意外用户名和邮箱应该为空

```shell
~ git config --list
```
- 假设你的用户名是test，邮箱是test@xx.com，那么执行下面两条命令进行用户的配置。

```shell
~ git config --global user.name "test"
~ git config --global user.email "test@xx.com"
```
- 再次执行查询操作检查用户信息是否配置成功。

```shell
~ git config --list
```
- 设置git命令输出为彩色

```shell
~ git config --global color.ui auto
```
- *进阶操作（非必须）：设置ssh模式，见[SSH配置指南](https://help.github.com/articles/connecting-to-github-with-ssh/)。

## 4.创建一个git项目
- 点击github首页的Start a project或者右上角的+号选择new repository（新的项目仓库）

![project](https://wangdunwen.github.io/static/images/git_project1.png)

- 填写项目名，描述信息。填好信息后点击Create repository，项目即创建成功。

![project](https://wangdunwen.github.io/static/images/git_project2.png)

- 打开刚刚创建的项目主页，点击Clone，复制提供的HTTPS链接。

![clone](https://wangdunwen.github.io/static/images/git_clone.png)

- 打开命令行（操作如上），cd到你想要保存的目录，输入以下命令将项目保存到该目录下。

```shell
~ git clone https://github.com/wangdunwen/test.git
```
## 5.第一次提交
- cd到刚刚创建的test目录，在该目录下创建一个hello.txt文件，并查看当前git状态，可以看到有一个新的文件没有提交。
 
![status](https://wangdunwen.github.io/static/images/git_status.png)

- 将全部修改的文件添加至下次提交中，“.”表示将所有已修改的文件添加进去。

```shell
~ git add .
```

- 将当前修改的文件提交至本地仓库，“-a”表示提交所有修改，“-m”表示附加的消息。

```shell
~ git commit -a -m "create: create hello.txt"
```
- 将本地仓库提交的更改同步到git远程仓库，master表示当前提交的分支。

```shell
~ git push origin master
```
- 在整个操作过程中，我们可以经常使用“git status”查看当前的状态，防止出错。

## 6.第一次更新本地仓库
- 将远程仓库的版本合并至本地版本，即更新本地仓库。下面命令是将远程的master分支合并至本地的master分支。

```shell
~ git pull origin master
```
- 以上已经是一个完成的项目创建、修改、更新的操作流程了。

## 7.一些常用命令
- 创建新的分支，下面命令是创建一个dev分支并切换至dev分支。

```shell
~ git checkout -b dev
```
- 将所有本地修改撤回至最近一个版本，这条命令很有用，可以快速恢复版本。HEAD也可以替换成其他版本。

```shell
~ git reset --hard HEAD
```
- 更多命令在github搜索git-cheat-sheet进行学习，或者点击链接直接访问[git-cheat-sheet](https://github.com/arslanbilal/git-cheat-sheet)。

## 8.进阶
- GitHub上private私有项目需要收费，如果需要进行私有项目的开发我们可以使用[gitlab.com](https://about.gitlab.com/gitlab-com/)。GitLab也是一个开源的git项目，不过他提供了免费私有项目的创建。
- 查看GitHub每个语言下开源项目star排名，见链接[topic](https://github.com/topics/)。

## 9.总结
以上是本人使用git的经验总结，当然git可以的功能远不止我提到的这些。希望本文能对一些不太熟悉git的新手有一些帮助:)    

------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->