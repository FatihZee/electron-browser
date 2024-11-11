function loadPage() {
    const url = document.getElementById('url-bar').value;
    if (url) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;  // Tambahkan http:// jika tidak ada
      }
      // Menggunakan ipcRenderer untuk meminta memuat URL
      window.electron.loadUrl(url);
    }
  }
  