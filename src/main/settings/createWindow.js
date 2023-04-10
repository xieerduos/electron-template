const {BrowserWindow} = require('electron');
const path = require('path');

async function createWindow() {
  // Create the browser window.
  const settingsWindow = new BrowserWindow({
    width: 550,
    height: 470,
    autoHideMenuBar: true, // 自动隐藏菜单
    // eslint-disable-next-line no-undef
    icon: path.join(__static, 'icons/win/icon.ico'),
    webPreferences: {
      // eslint-disable-next-line no-undef
      preload: path.join(__dirname, 'settingsWindow.js'),
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await settingsWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'settings.html');
    if (!process.env.IS_TEST) settingsWindow.webContents.openDevTools();
  } else {
    // Load the index.html when not in development
    settingsWindow.loadURL('app://./settings.html');
  }
  return settingsWindow;
}

module.exports = createWindow;
