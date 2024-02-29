const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 490,
    height: 760,
    // 无边框窗口
    frame: false,
    // 禁止改变窗口大小
    resizable: false,
    // 禁止最大化
    maximizable: false,
    // 自定义窗口
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#ffffff',
      symbolColor: '#74b1be',
      height: 30
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: false,
      webviewTag: true,
    }
  })

  win.loadFile('login.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})