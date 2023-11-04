'use strict';

import {app, protocol, ipcMain, BrowserWindow, nativeImage} from 'electron';
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib';
import installExtension, {VUEJS3_DEVTOOLS} from 'electron-devtools-installer';
import path from 'path';
import {handleSetTitle} from '@/main/utils/setTitle.js';
import {handleFileOpen} from '@/main/utils/openDialog.js';

const {createWindow, setQuitting, getMainWindow} = require('@/main/windows/mainWindow.js');

const isDevelopment = process.env.NODE_ENV !== 'production';

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: {secure: true, standard: true}}]);

app.on('before-quit', () => {
  setQuitting(true);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  const mainWindow = getMainWindow({createIfNotFound: true});
  if (mainWindow.isMinimized()) {
    mainWindow.restore();
  }
  mainWindow.show();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  createProtocol('app');

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
  // const sdk = require('@/main/sdk/index.js');
  const tray = require('@/main/tray/index.js');
  const settings = require('@/main/settings/index.js');

  // if (process.platform === 'win32') {
  //   sdk.initialize();
  // }
  tray.initialize();
  settings.initialize();

  if (process.platform === 'darwin') {
    // 仅在 macOS 上设置 Dock 图标
    const iconPath = path.join(__static, 'icons/png/512x512.png');
    app.dock.setIcon(iconPath);
  }
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
