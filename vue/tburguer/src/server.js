const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const app = express();

const router = jsonServer.router(path.join(__dirname, '../db/db.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

app.use('/api', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
