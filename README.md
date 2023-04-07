# electron-template

## 安装项目依赖

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

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
