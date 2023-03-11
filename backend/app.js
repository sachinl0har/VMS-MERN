const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use(cookieParser());

const routes = require('./routes/routes');

app.use('/', routes);


module.exports = app;