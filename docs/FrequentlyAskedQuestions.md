# 常见问题

## error @achrinza/node-ipc@9.2.2

error @achrinza/node-ipc@9.2.2: The engine "node" is incompatible with this module. Expected version "8 || 10 || 12 || 14 || 16 || 17". Got "18.15.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.

https://github.com/vuejs/vue-cli/issues/7116#issuecomment-1113911601

```
yarn --ignore-engines
```

## (node:24292) ExtensionLoadWarning: Warnings loading extension

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

## yarn 的时候报下面如下错误

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

## 安装错误

## 在 Mac 电脑上 yarn 安装模块出现下面错误

```bash
warning " > sass-loader@12.6.0" has unmet peer dependency "webpack@^5.0.0".
[4/4] 🔨  Building fresh packages...
[-/7] ⠠ waiting...
[-/7] ⠠ waiting...
[-/7] ⠠ waiting...
[-/7] ⠠ waiting...
error /Users/shaohai.li/project/electron-template/node_modules/phantomjs-prebuilt: Command failed.
Exit code: 1
Command: node install.js
Arguments:
Directory: /Users/shaohai.li/project/electron-template/node_modules/phantomjs-prebuilt
Output:
PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-macosx.zip
Saving to /var/folders/zk/g2crrhzj0fz5wt65mpvb7tnc0000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip
Receiving...

Error making request.
Error: read ETIMEDOUT
```

一般是网络原因，重新 yarn，或者看下面的解决方案

## PhantomJS not found on PATH

```bash
PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-macosx.zip
Saving to /var/folders/zk/g2crrhzj0fz5wt65mpvb7tnc0000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip
Receiving...
Received 12356K total.
Extracting zip contents
Error extracting zip
Phantom installation failed Error: end of central directory record signature not found
    at /Users/shaohai.li/project/electron-template/node_modules/yauzl/index.js:187:14
    at /Users/shaohai.li/project/electron-template/node_modules/yauzl/index.js:631:5
    at /Users/shaohai.li/project/electron-template/node_modules/fd-slicer/index.js:32:7
    at FSReqCallback.wrapper [as oncomplete] (fs.js:563:5) Error: end of central directory record signature not found
    at /Users/shaohai.li/project/electron-template/node_modules/yauzl/index.js:187:14

```

或者

```bash
PhantomJS not found on PATH
Download already available at /var/folders/zk/g2crrhzj0fz5wt65mpvb7tnc0000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip
Checksum did not match
Downloading https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-macosx.zip
Saving to /var/folders/zk/g2crrhzj0fz5wt65mpvb7tnc0000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip
Receiving...
  [=---------------------------------------] 2%

```

这个错误可能是因为 PhantomJS 下载文件的完整性受损导致的。您可以尝试以下解决方案：

1. 删除 PhantomJS 的下载文件并重新运行 yarn 命令。

```bash
# 删掉node_modules
rm -rf node_modules
# 重新安装
yarn
```

2. 尝试手动下载 PhantomJS 并将其添加到系统 PATH 环境变量中。

您可以从此处下载 PhantomJS（https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-macosx.zip），然后将其解压到某个目录，最后将该目录添加到 PATH 环境变量中。如果您使用的是 macOS 操作系统，您可以通过运行以下命令将其添加到 PATH 环境变量：

```
export PATH=$PATH:/path/to/phantomjs/bin
```

---

1. 下载

2. 解压出来

3. 我的解压后的目录是 `～/project/phantomjs-2.1.1-macosx/bin`

4. 使用 vim 修改环境变量，我的是 Mac M2

```bash
vim ~/.zshrc
```

5. 按 i 输入下面命令

```bash
export PATH=$PATH:～/project/phantomjs-2.1.1-macosx/bin
```

6. 按 ESC，按住 shift + ;键， 输入 wq 回车

```
source  ~/.zshrc
```

7. 重新 npm install

```
npm install
```

我试过这个方法好使。

如果上述方法都无法解决问题，您可以尝试使用其他版本的 PhantomJS 或使用其他工具替代 PhantomJS。

## 08:57:27.309 › app2.dll error Dynamic Linking Error: dlopen(kernel32.dylib, 0x0002): tried: 'kernel32.dylib'

```
8:57:27.309 › app2.dll error Dynamic Linking Error: dlopen(kernel32.dylib, 0x0002): tried: 'kernel32.dylib' (no such file), '/System/Volumes/Preboot/Cryptexes/OSkernel32.dylib' (no such file), '/Users/shaohai.li/project/electron-template/node_modules/electron/dist/Electron.app/Contents/Frameworks/kernel32.dylib' (no such file), '/usr/lib/kernel32.dylib' (no such file, not in dyld cache), 'kernel32.dylib' (no such file), '/usr/local/lib/kernel32.dylib' (no such file), '/usr/lib/kernel32.dylib' (no such file, not in dyld cache)
(node:23898) UnhandledPromiseRejectionWarning: Error: Failed to load image from path '/Users/shaohai.li/project/electron-template/public/icons/win/icon.ico'
    at useTray (webpack:///./src/main/tray/index.js?:10:16)
    at Object.initialize (webpack:///./src/main/tray/index.js?:6:10)
    at App.eval (webpack:///./src/main/background.js?:103:8)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:23898) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:23898) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

```

这是因为 public/sdk/app1.dll 是 windows 的 dll， 所以 Mac 使用会报错

注释掉 sdk 代码 或者换成 mac 的 dll

main/background.js

```
  if (process.platform === 'win32') {
    sdk.initialize();
  }
```

## (node:24938) UnhandledPromiseRejectionWarning: Error: Failed to load image from path '/Users/shaohai.li/project/electron-template/public/icons/win/icon.ico'

```
(node:24938) UnhandledPromiseRejectionWarning: Error: Failed to load image from path '/Users/shaohai.li/project/electron-template/public/icons/win/icon.ico'
    at useTray (webpack:///./src/main/tray/index.js?:10:16)
    at Object.initialize (webpack:///./src/main/tray/index.js?:6:10)
    at App.eval (webpack:///./src/main/background.js?:106:8)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:24938) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
```

这是因为图标使用 win 专属的.ico 图标原因

## Mac 设置 Tray 不生效

https://www.electronjs.org/zh/docs/latest/api/tray

图标设置为 png/16x16.png

```js
function useTray(mainWindow) {
  const tray = new Tray(
    path.join(__static, `icons/${process.platform === 'win32' ? 'win/icon.ico' : 'png/16x16.png'}`)
  );
  // ...
  const clickCallBack = () => {
    if (process.platform === 'darwin') {
      tray.popUpContextMenu();
    } else {
      mainWindow.show();
    }
  };

  if (process.platform === `darwin`) {
    tray.on('mouse-up', clickCallBack);
  } else {
    tray.on('click', clickCallBack);
  }
  return tray;
}
```
