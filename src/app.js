const path = require('path');
const express = require('express');
const router = require('./routers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
