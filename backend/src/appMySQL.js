const express = require('express');
const cors = require('cors');

const UserRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', UserRoute);

module.exports = app;