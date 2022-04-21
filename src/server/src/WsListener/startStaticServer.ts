import http from 'http';
import express from 'express';
import path from 'path';
import { WS_PORT } from '../../../constants';


export const startStaticServer = (): http.Server => {
    const app = express();

    app.get('/*', (_, res) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });

    app.use(express.static('client'));

    return app.listen(WS_PORT, () => console.log(`settings server is listening port ${WS_PORT}`));
};