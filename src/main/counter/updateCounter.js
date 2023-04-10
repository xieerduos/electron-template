import {app, Menu} from 'electron';

export default function updateCounter(mainWindow) {
  setInterval(() => {
    mainWindow.webContents.send('update-counter', 1);
  }, 3000);
  //   const menu = Menu.buildFromTemplate([
  //     {
  //       label: app.name,
  //       submenu: [
  //         {
  //           click: () => mainWindow.webContents.send('update-counter', 1),
  //           label: 'Increment'
  //         },
  //         {
  //           click: () => mainWindow.webContents.send('update-counter', -1),
  //           label: 'Decrement'
  //         }
  //       ]
  //     }
  //   ]);

  //   Menu.setApplicationMenu(menu);
}
