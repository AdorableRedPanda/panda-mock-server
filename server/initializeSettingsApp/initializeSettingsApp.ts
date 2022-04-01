import express from 'express';
import open from 'open';
const path = require('path');


const settingsPort = process.env.APP_SETTINGS_PORT || '9161';

export const initializeSettingsApp = () => {
    const app = express();

    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    })

    app.use(express.static('client'));

    app.listen(settingsPort);

    open(`http:/localhost:${settingsPort}`).then(() => console.log('settings app is ready'));
}