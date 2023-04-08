# Electron Template

Electron Template 是一个基于 Electron 框架的开源项目模板，它可以帮助开发者更快地创建 Electron 应用程序。该模板提供了一组常用的功能和结构，如主进程、渲染进程、菜单栏、快捷键、错误处理和日志记录等，以及一些常用的第三方库和工具。使用 Electron Template，开发者可以专注于自己的业务逻辑，而不必从头开始搭建 Electron 应用程序的框架。

## Electron Template 的主要特点包括：

- 简单易用：使用 Electron Template，开发者可以快速创建一个可运行的 Electron 应用程序，只需几行命令即可完成。
- 可定制性强：Electron Template 的结构清晰，代码易于理解和修改。开发者可以根据自己的需求，自由地添加、删除、修改功能。
- 社区支持良好：Electron Template 是一个活跃的开源项目，拥有一个庞大的开发者社区。开发者可以在社区中获取支持和帮助，也可以贡献自己的代码和想法。

总之，如果你需要一个快速创建 Electron 应用程序的模板，Electron Template 是一个不错的选择。

## 快速开始

### 安装项目依赖

```
yarn install
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

把public/logo.png换成你自己的，运行下面命令

```bash
npm run logo
```

## 常见错误

### error @achrinza/node-ipc@9.2.2

error @achrinza/node-ipc@9.2.2: The engine "node" is incompatible with this module. Expected version "8 || 10 || 12 || 14 || 16 || 17". Got "18.15.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.

https://github.com/vuejs/vue-cli/issues/7116#issuecomment-1113911601

```
yarn --ignore-engines
```

### (node:24292) ExtensionLoadWarning: Warnings loading extension

```
 INFO  Launching Electron...
(node:24292) ExtensionLoadWarning: Warnings loading extension at C:\Users\Administrator\AppData\Roaming\electron-template\extensions\ljjemllljcmogpfapbkkighbhhppjdbg:
  Unrecognized manifest key 'browser_action'.
  Unrecognized manifest key 'update_url'.
  Permission 'contextMenus' is unknown or URL pattern is malformed.
  Cannot load extension with file or directory name _metadata. Filenames starting with "_" are reserved for use by the system.
(Use `electron --trace-warnings ...` to show where the warning was created)
```

https://blog.csdn.net/qq_42475499/article/details/120890480

### yarn 的时候报下面如下错误

```bash
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
hint: The '.husky/commit-msg' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```

这个错误提示是因为 '.husky/pre-commit' 和 '.husky/commit-msg' 钩子没有设置为可执行权限。为了解决这个问题，您需要执行以下步骤：

- 在终端中导航到包含 '.husky' 文件夹的项目根目录。
- 运行以下命令，为这些钩子文件设置可执行权限：

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```
