const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let win
var ws = require('./ws.js')

function createWindow () {
    win = new BrowserWindow({width: 800, height: 600, frame: false});
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})