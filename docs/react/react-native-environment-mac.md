# ReactNative Mac开发环境搭建

本说明旨在帮助读者快速搭建开发RN应用，考虑到部门大部分是Mac，故奉上Mac-IOS开发环境，Window请戳[这里](https://reactnative.cn/docs/0.51/getting-started.html)

## 工具依赖

- Node/yarn

- XCode

- Watchman

- react-native-cli

### 安装Node

1. 推荐使用homebrew

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. 安装node/yarn

 ```shell
 brew install node yarn
 ```

没有翻墙请使用淘宝镜像以加速下载

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

### XCode

提供IDE和**Simulator模拟器**，AppStore或[官网](https://developer.apple.com/xcode/downloads/)下载，React Native目前需要Xcode 8.0 或更高版本。

### Watchman

监视文件变更工具，热加载需要用到该工具

```
brew install watchman
```

### react-native-cli

react native的cli工具，通常都使用该工具创建项目模板

 ```shell
npm install -g react-native-cli
 ```

## Hello World

一般0.44.3版本比较稳定，最新版本如果没有翻墙，很可能有些库无法下载，导致编译错误。所以如果在家没翻墙，建议创建项目使用0.44.3版本，

 ```shell
react-native init HelloRN --0.44.3
cd AwesomeProject
react-native run-ios
 ```

### 运行RN项目

#### 第一种方式: Xcode可视化方式(推荐，速度快/查看报错方便)

 1. 进入RN项目下ios目录，打开.xcodeproj后缀文件，自动会xcode打开

 ![xcodeproj后缀文件](./assets/xcodeproject.png)

 2. 如下选择模拟器机型，启动项目即可预览App

 ![xcodeproj后缀文件](./assets/run.png)
 

#### 第二种方式: 命令行方式

 ```shell
cd HelloRN
react-native run-ios
 ```

### 推荐链接：

[React中文网](https://reactnative.cn/docs/0.51/getting-started.html#content)
