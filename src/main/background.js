'use strict';

import {app, protocol, ipcMain, BrowserWindow} from 'electron';
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib';
import installExtension, {VUEJS3_DEVTOOLS} from 'electron-devtools-installer';
import path from 'path';
import {handleSetTitle} from '@/main/utils/setTitle.js';
import {handleFileOpen} from '@/main/utils/openDialog.js';
import * as counter from '@/main/counter/index.js';

const isDevelopment = process.env.NODE_ENV !== 'production';

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: {secure: true, standard: true}}]);

let mainWindow;
async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true, // 自动隐藏菜单
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    // eslint-disable-next-line no-undef
    icon: path.join(__static, `icons/${process.platform === 'win32' ? 'win/icon.ico' : 'png/16x16.png'}`),
    webPreferences: {
      // eslint-disable-next-line no-undef
      preload: path.join(__dirname, 'mainWindow.js'),
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      autoplayPolicy: 'no-user-gesture-required' // 允许自动播放音频和视频
    }
  });

  mainWindow.on('show', () => {
    mainWindow.setSkipTaskbar(false);
  });

  mainWindow.on('close', (event) => {
    // 关闭窗口 不退出应用
    // event.preventDefault();
    // mainWindow.hide();
    // mainWindow.setSkipTaskbar(true);
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html');
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      // await installExtension(VUEJS3_DEVTOOLS);
      await installExtension({
        id: 'ljjemllljcmogpfapbkkighbhhppjdbg', // Vue Devtools beta
        electron: '>=1.2.1'
      });
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString());
    }
  }
  ipcMain.on('set-title', handleSetTitle);
  ipcMain.handle('dialog:openFile', handleFileOpen);
  createWindow();
  counter.initialize(mainWindow);
  // const sdk = require('@/main/sdk/index.js');
  const tray = require('@/main/tray/index.js');
  const settings = require('@/main/settings/index.js');

  // if (process.platform === 'win32') {
  //   sdk.initialize();
  // }
  tray.initialize(mainWindow);
  settings.initialize();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}
