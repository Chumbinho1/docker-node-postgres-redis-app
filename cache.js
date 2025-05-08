const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
    socket: {
        host: process.env.CACHE_HOST,
        port: process.env.CACHE_PORT
    }
});

client.connect();

client.on('error', (err) => {
    console.error('Erro no Redis:', err);
});

module.exports = client;