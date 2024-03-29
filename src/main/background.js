'use strict';

import {app, protocol, ipcMain, session} from 'electron';
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib';
import path from 'path';
import {handleSetTitle} from '@/main/utils/setTitle.js';
import {handleFileOpen} from '@/main/utils/openDialog.js';

const log = require('@/main/log/index.js');
const {createWindow, setQuitting, getMainWindow} = require('@/main/windows/mainWindow.js');

const isDevelopment = process.env.NODE_ENV !== 'production';

// 全局捕获未捕获的异常错误
process.on('uncaughtException', (error) => {
  log.error('[background.js 未捕获的异常错误]', error);
});

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  // 已经存在实例退出
  log.info('quit gotTheLock', gotTheLock);
  app.quit();
} else {
  protocol.registerSchemesAsPrivileged([
    // https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/607#issuecomment-569469770
    {scheme: 'app', privileges: {secure: true, supportFetchAPI: true, standard: true}}
  ]);
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到mainWindow这个窗口
    log.info('[second-instance commandLine]', commandLine);
    log.info('[second-instance workingDirectory]', workingDirectory);
    const mainWindow = getMainWindow({createIfNotFound: true});
    log.info('[second-instance mainWindow]', mainWindow && !mainWindow.isDestroyed());
    if (mainWindow && !mainWindow.isDestroyed()) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
    }
  });
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
      const extensionFolder = path.join(__static, '../vue_devtools/');
      session.defaultSession
        .loadExtension(extensionFolder)
        .then((res) => {
          // console.log('[vue_devtools res]', res);
        })
        .catch((err) => {
          console.error('[vue_devtools err]', err);
        });
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
}
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
