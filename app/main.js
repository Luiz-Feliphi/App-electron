console.log('Processo Princcipal')
console.log(`Electron ${process.versions.electron}`)
const { app, BrowserWindow, nativeTheme } = require('electron/main')
const path = require('node:path')

function createWindow () {
  nativeTheme.themeSource = 'dark'
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: path.join(__dirname, 'icons/icon.ico'),
    autoHideMenuBar: true,
    resizable: true,
    //execução do preload.js
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.setMenuBarVisibility(false)
  win.loadFile('app/index.html')
}

// Garante que uma nova janela seja criada ao ativar o app, especialmente no macOS
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Abre uma nova janela no macOS se nenhuma estiver aberta ao reativar o app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})