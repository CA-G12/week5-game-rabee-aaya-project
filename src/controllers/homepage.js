const fetch = require('node-fetch');
const path = require('path');

const fetchData = (req, res) => {
  const url = 'https://api.rawg.io/api/games?key=e735fb7f64764085aed20235ec7455f9';
  fetch(url).then((response) => response.json())
    .then((data) => res.send((data))).catch(console.log);
};
const fetchResults = (req, res) => {
  const url = 'https://api.rawg.io/api/games?key=e735fb7f64764085aed20235ec7455f9';
  fetch(url).then((response) => response.json())
    .then((data) => res.send((data))).catch(console.log);
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

module.exports = { getHomePage, fetchData, fetchResults };
