const {app, Menu, Tray, ipcMain} = require('electron');
const path = require('path');
let tray = null;

exports.initialize = function initialize(mainWindow) {
  tray = useTray(mainWindow);
};

function useTray(mainWindow) {
  const tray = new Tray(
    path.join(__static, `icons/${process.platform === 'win32' ? 'win/icon.ico' : 'png/16x16.png'}`)
  );

  const template = [
    // {label: '退出', role: 'quit'}
    {
      label: '显示主页面',
      click: () => {
        mainWindow.show();
      }
    },
    {
      label: '设置',
      click: () => {
        ipcMain.emit('toMain_settings', null, {type: 'show'});
      }
    },
    {
      label: '退出',
      click: () => {
        // 1. 销毁主窗口
        mainWindow.destroy();
        // 2. 退出应用
        app.quit();
      }
    }
  ];

  const contextMenu = Menu.buildFromTemplate(template);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);

  const clickCallBack = () => {
    if (process.platform === 'darwin') {
      tray.popUpContextMenu();
    } else {
      mainWindow.show();
    }
  };

  if (process.platform === 'darwin') {
    tray.on('mouse-up', clickCallBack);
  } else {
    tray.on('click', clickCallBack);
  }
  return tray;
}
