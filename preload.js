const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  loadUrl: (url) => ipcRenderer.send('load-url', url),
});
