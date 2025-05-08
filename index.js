require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT;
const usersRouter = require('./routes/users');

app.get('/', (req, res) => {
    res.send('API Node.js + PostgreSQL e Redis');
});

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
