require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.DB_HOST;
const usersRouter = require('./routes/users');

app.get('/', (req, res) => {
    res.send('App Node.js com PostgreSQL e Redis');
});

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
