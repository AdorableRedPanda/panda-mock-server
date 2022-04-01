import express from "express";

const port = process.env.APP_PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`PandaMockServer is listening on port ${port}`)
})