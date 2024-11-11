const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  // Memuat file HTML utama
  win.loadFile('index.html');

  // Menetapkan URL default setelah halaman dimuat
  win.webContents.once('did-finish-load', () => {
    win.webContents.loadURL('https://www.google.co.id/?hl=id');  // URL default
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
