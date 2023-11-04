const {BrowserWindow} = require('electron');
const path = require('path');
const log = require('@/main/log/index.js');

let isQuitting = false;
let mainWindow;
async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true, // 自动隐藏菜单
    show: false,
    // eslint-disable-next-line no-undef
    icon: path.join(__static, `icons/${process.platform === 'win32' ? 'win/icon.ico' : 'png/icon.png'}`),
    webPreferences: {
      // eslint-disable-next-line no-undef
      preload: path.join(__dirname, 'mainWindow.js'),
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      // 关闭窗口 不退出应用
      event.preventDefault();
      mainWindow.hide();
      // mainWindow.setSkipTaskbar(true);
    }
    // 如果 isQuitting 为 true，则允许窗口关闭，从而使应用退出
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('render-process-gone', (event, details) => {
    // 将窗口渲染进程崩溃事件的详细信息记录到日志文件
    log.error('Window render process crashed', {
      reason: details.reason,
      exitCode: details.exitCode
    });
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html');
  }

  return mainWindow;
}

function setQuitting(value) {
  isQuitting = value;
}
function getQuitting() {
  return isQuitting;
}

function getMainWindow({createIfNotFound} = {createIfNotFound: true}) {
  // 不存在则会创建窗口
  if (createIfNotFound && (!mainWindow || (mainWindow && mainWindow.isDestroyed()))) {
    return createWindow();
  }

  return mainWindow;
}

module.exports = {
  createWindow,
  getMainWindow,
  setQuitting,
  getQuitting
};
