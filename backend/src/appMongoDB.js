const express = require('express');

const PersonRoute = require('./routes/personRoute');

const app = express();
app.use(express.json());
app.use('/person', PersonRoute);

module.exports = app;