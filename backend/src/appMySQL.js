const express = require('express');

const UserRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use('/user', UserRoute);

module.exports = app;