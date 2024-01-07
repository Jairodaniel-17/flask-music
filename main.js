const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadURL('http://localhost:50000') // Asegúrate de que tu aplicación Flask se esté ejecutando en el puerto 5000
}

app.whenReady().then(createWindow)