const express = require('express');

const PersonRoute = require('./routes/personRoute');

const app = express();
app.use(express.json());
app.use(PersonRoute);

module.exports = app;