# Electron Template

Electron Template 是一个基于 Electron 框架的开源项目模板，它可以帮助开发者更快地创建 Electron 应用程序。

## **快速开始**

## 安装项目依赖

```
yarn install
```

## 启动项目

```
npm start
```

## 打包构建

```
npm run electron:build
```

## 代码检查和修复

```
npm run lint
```

---

## **自定义配置**

Vue Cli https://cli.vuejs.org/config/

vue-cli-plugin-electron-builder https://github.com/nklayman/vue-cli-plugin-electron-builder

## 生成图标

https://www.npmjs.com/package/electron-icon-builder

把 public/logo.png 换成你自己的，运行下面命令

```bash
npm run logo
```

## 目标

1. 进程之间通信 例子
2. electron log
3. dll 通信
4. docs 文档
5. 系统托盘

## 日志

```
npm i electron-log  -S
```

## 调用 dll

```bash
npm i ffi-napi ref-napi -S
```

## docs 文档

```
npm i docsify-cli -g
```

```
docsify init docs
```
