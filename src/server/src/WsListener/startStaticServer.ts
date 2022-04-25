import http from 'http';
import express from 'express';
import path from 'path';
import { WS_PORT } from '../../../constants';

export const startStaticServer = (settingsPort?: string): http.Server => {
    const app = express();
    const port = settingsPort || WS_PORT;


    app.use(express.static(path.join(__dirname, 'client')));
    app.get('/*', (_, res) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });

    return app.listen(port, () => console.log(`settings server is listening port ${port}`));
};