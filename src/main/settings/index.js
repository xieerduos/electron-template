const {ipcMain} = require('electron');
const createWindow = require('@/main/settings/createWindow');
const log = require('@/main/log');
function initialize() {
  ipcMain.on('toMain_settings', onSettings);
  ipcMain.handle('toMain_settings', onSettings);
}

function onSettings(event, data = {}) {
  try {
    if (data.type === 'show') {
      showSettings();
    }
  } catch (error) {
    log.error('[settings_toMain error]', error);
  }
}

let settingsWindow = null;

async function showSettings() {
  try {
    if (settingsWindow && !settingsWindow.isDestroyed()) {
      settingsWindow.show();
      return;
    }
    settingsWindow = await createWindow();

    settingsWindow.on('closed', function () {
      settingsWindow = null;
    });
  } catch (error) {
    log.error('[settings_toMain showSettings]', error);
  }
}

module.exports = {
  showSettings,
  initialize
};
