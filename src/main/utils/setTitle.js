import {BrowserWindow} from 'electron';

export function handleSetTitle(event, title) {
  const webContents = event.sender;
  const mainWindow = BrowserWindow.fromWebContents(webContents);
  mainWindow.setTitle(title);
}
