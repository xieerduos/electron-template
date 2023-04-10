const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  onShowMessage: (callback) => ipcRenderer.on('show-message', callback),
  send: (channel, data) => {
    // whitelist channels
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    const validChannels = ['fromMain', 'update-counter'];
    if (validChannels.includes(channel)) {
      // 解决无法removeListener问题
      // https://github.com/reZach/secure-electron-template/issues/43#issuecomment-772303787
      const subscription = (event, ...args) => func(event, ...args);
      ipcRenderer.on(channel, subscription);
      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    }
  },
  once: (channel, callback) => {
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      const newCallback = (_, data) => callback(data);
      ipcRenderer.once(channel, newCallback);
    }
  },
  removeAllListeners: (channel) => {
    const validChannels = ['fromMain', 'update-counter'];
    if (validChannels.includes(channel)) {
      ipcRenderer.removeAllListeners(channel);
    }
  }
});
