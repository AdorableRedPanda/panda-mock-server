import express from "express";

const mockedPort = process.env.APP_MOCKS_PORT;
export const initializeMocks = () => {
    const app = express();

    app.get('/', (_, res) => {
        res.send('hi from mock server');
    })

    app.listen(mockedPort);
}