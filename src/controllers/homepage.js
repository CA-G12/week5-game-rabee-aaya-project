const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const writeResults = (data, res) => {
  const filePath = path.join(__dirname, '..', 'models', 'result.json');
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Internal error</h1>');
    }
  });
};
const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
  const url = 'https://api.rawg.io/api/games?key=e735fb7f64764085aed20235ec7455f9';
  fetch(url).then((response) => response.json()).then((data) => writeResults(data, res));
};

module.exports = getHomePage;
