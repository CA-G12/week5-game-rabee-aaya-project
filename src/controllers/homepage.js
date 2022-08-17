/* eslint-disable linebreak-style */
const fetch = require('node-fetch');
const path = require('path');

const fetchData = (req, res) => {
  const url = 'https://api.rawg.io/api/games?key=e735fb7f64764085aed20235ec7455f9';
  fetch(url).then((response) => response.json())
    .then((data) => res.send((data)))
    .catch(console.log);
  // const filePath = path.join(__dirname, '..', 'models', 'result.json');
  // fs.writeFile(filePath, JSON.stringify(data), (err) => {
  //   if (err) {
  //     res.writeHead(500, { 'Content-Type': 'text/html' }s);
  //     res.end('<h1>Internal error</h1>');
  //   }
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

module.exports = { getHomePage, fetchData };
