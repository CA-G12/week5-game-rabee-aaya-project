/* eslint-disable linebreak-style */
const path = require('path');
const express = require('express');
const router = require('./routers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
  });
  
  app.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
  });

module.exports = app;
