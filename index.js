const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');

app.get('/', (req, res) => {
    res.send('App Node.js com PostgreSQL e Redis');
});

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
