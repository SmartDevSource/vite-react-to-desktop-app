const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js') // Chemin vers votre fichier preload
        // }
    })

    win.loadFile(path.join(app.getAppPath(), 'dist/index.html'))
    win.setMenu(null)
}

app.whenReady().then(() =>{
    createWindow()

    app.on('activate', () =>{
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})