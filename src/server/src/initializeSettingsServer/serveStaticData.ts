import express from 'express';
import path from 'path';
import http from 'http';

const settingsPort = process.env.APP_SETTINGS_PORT || '9161';

export const serveStaticData = (): http.Server => {
    const app = express();

    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });

    app.use(express.static('client'));

    return app.listen(settingsPort, () => console.log(`settings server is listening port ${settingsPort}`));
};