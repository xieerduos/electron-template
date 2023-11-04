# Electron Template

Electron Template 是一个基于 [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder) 框架的开源项目模板。

## 基于该模版开发的项目案例

electron + vue3 + element-plus + pinia: https://github.com/xieerduos/electron-ffmpeg-video-to-gif

## 快速开始

### 安装项目依赖

```
npm install
```

安装过程中遇到问题？

```
npm install --ignore-engines --legacy-peer-deps
```

### 启动项目

```
npm start
```

### 打包构建

```
npm run electron:build
```

### 代码检查和修复

```
npm run lint
```

## 自定义配置

Vue Cli https://cli.vuejs.org/config/

vue-cli-plugin-electron-builder https://github.com/nklayman/vue-cli-plugin-electron-builder

## 生成图标

https://www.npmjs.com/package/electron-icon-builder

把 public/logo.png 换成你自己的，运行下面命令

```bash
npm run logo
```

Electron Mac 系统托盘图标失真问题[electron-mac-tray-icon-distortion.md](docs/electron-mac-tray-icon-distortion.md)

## 常见问题

遇到问题了？可以先看看这里[docs/FrequentlyAskedQuestions.md](docs/FrequentlyAskedQuestions.md)有没有答案

## License

Copyright (c) 李钟意.

Licensed under the [MIT](LICENSE.txt) license.
