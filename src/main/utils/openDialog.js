import {dialog} from 'electron';

export async function handleFileOpen() {
  const {canceled, filePaths} = await dialog.showOpenDialog();
  if (canceled) {
    return '';
  } else {
    return filePaths[0];
  }
}
