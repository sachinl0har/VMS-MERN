const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const routes = require('./routes/routes');

app.use('/', routes);


module.exports = app;