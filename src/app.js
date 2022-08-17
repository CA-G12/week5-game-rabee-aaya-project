/* eslint-disable linebreak-style */
const express = require('express');
const router = require('./routers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(router);

module.exports = app;
