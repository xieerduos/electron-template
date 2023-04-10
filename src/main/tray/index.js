const {app, Menu, Tray, ipcMain} = require('electron');
const path = require('path');
let tray = null;

exports.initialize = function initialize(mainWindow) {
  tray = useTray(mainWindow);
};

function useTray(mainWindow) {
  const tray = new Tray(path.join(__static, 'icons/win/icon.ico'));

  const template = [
    // {label: '退出', role: 'quit'}
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
  tray.on('click', () => {
    // 我们这里模拟桌面程序点击通知区图标实现打开关闭应用的功能
    mainWindow.show();
    // mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
    // mainWindow.isVisible() ? mainWindow.setSkipTaskbar(false) : mainWindow.setSkipTaskbar(true);
  });
  return tray;
}
