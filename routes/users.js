const express = require('express');
const router = express.Router();
const db = require('../db');
const cache = require('../cache');

// GET /users
router.get('/', async (req, res) => {
    try {
        const cached = await cache.get('users');
        if (cached) {
            return res.json(JSON.parse(cached));
        }

        const result = await db.query('SELECT * FROM users');
        await cache.set('users', JSON.stringify(result.rows), {
            EX: 5
        });

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários');
    }
});

module.exports = router;
