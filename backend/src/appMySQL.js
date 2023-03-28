const express = require('express');

// const PersonRoute = require('./routes/personRoute');

const app = express();
app.use(express.json());
app.get('/user', (req, res) => res.status(200).json({ messange: 'foi carai' }));

module.exports = app;