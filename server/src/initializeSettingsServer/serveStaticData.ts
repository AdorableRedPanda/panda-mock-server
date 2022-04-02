import express, { Express } from 'express';
import path from 'path';

export const serveStaticData = (port: string): Express => {
    const app = express();

    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });

    app.use(express.static('client'));

    app.listen(port);

    return app;
};