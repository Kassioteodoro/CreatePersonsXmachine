const express = require('express');
const cors = require('cors');

const PersonRoute = require('./routes/personRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/person', PersonRoute);

module.exports = app;