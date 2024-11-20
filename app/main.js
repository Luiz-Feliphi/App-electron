const { app, BrowserWindow, nativeTheme } = require('electron/main')
const path = require('node:path')

function createWindow () {
  nativeTheme.themeSource = 'dark'
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: 'icons/svg/globe.svg',
    //autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  //win.setMenuBarVisibility(false)
  win.loadFile('app/index.html')
}

function childWindow(){
  nativeTheme.themeSource = 'dark'
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: 'icons/svg/globe.svg',
    //autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  //win.setMenuBarVisibility(false)
  win.loadFile('app/sobre.html')
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

const template = [
  {
    label: 'A',
    submenu:[
      {
        label:'laa',
        click:() => childWindow()
      },
      {
        label:'aa',
        click:() => childWindow()
      }
    ]
  }
]