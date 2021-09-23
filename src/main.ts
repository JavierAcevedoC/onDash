import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev'; // New Import
import Talker from './electron/layers/talker';

let win: BrowserWindow;

const createWindow = (): void => {
    win = new BrowserWindow({
        width: 800,
        height: 480,
        webPreferences: {
            nodeIntegration: true
        },
        title: "OnDash",
        kiosk: false, //Change when test on rpi4, its like fullScreen but with purpose
        resizable: false,
    });

    win.loadURL(
        isDev
            ? 'http://localhost:8000'
            : `file://${app.getAppPath()}/index.html`,
    );
    win.setMenu(null);
    isDev ? win.webContents.openDevTools() : null;

    const talker = new Talker(win);
}

app.on('ready', createWindow);
app.setName('OnDash');
