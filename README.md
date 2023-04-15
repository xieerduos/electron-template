# Electron Template

Electron Template 是一个基于 Electron 框架的开源项目模板，它可以帮助开发者更快地创建 Electron 应用程序。该模板提供了一组常用的功能和结构，如主进程、渲染进程、菜单栏、快捷键、错误处理和日志记录等，以及一些常用的第三方库和工具。使用 Electron Template，开发者可以专注于自己的业务逻辑，而不必从头开始搭建 Electron 应用程序的框架。

## 主要特点包括：

- 简单易用：使用 Electron Template，开发者可以快速创建一个可运行的 Electron 应用程序，只需几行命令即可完成。
- 可定制性强：Electron Template 的结构清晰，代码易于理解和修改。开发者可以根据自己的需求，自由地添加、删除、修改功能。
- 社区支持良好：Electron Template 是一个活跃的开源项目，拥有一个庞大的开发者社区。开发者可以在社区中获取支持和帮助，也可以贡献自己的代码和想法。

总之，如果你需要一个快速创建 Electron 应用程序的模板，Electron Template 是一个不错的选择。

## 快速开始

### 安装项目依赖

```
npm install
```

安装过程中遇到问题？

```
npm install --ignore-engines --legacy-peer-deps
```

还有问题？ [docs/FrequentlyAskedQuestions.md](docs/FrequentlyAskedQuestions.md)

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
