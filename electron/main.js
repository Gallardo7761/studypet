const { app, BrowserWindow } = require('electron');
const packageJson = require('../package.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: `StudyPet v${packageJson.version}`,
  });

  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);