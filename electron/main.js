const { app, BrowserWindow, shell, screen } = require('electron');
const packageJson = require('../package.json');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: width,
    height: height,
    title: `StudyPet v${packageJson.version}`,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.setMenu(null);

  win.loadURL('http://localhost:3000');

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    if (url !== win.webContents.getURL()) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(createWindow);