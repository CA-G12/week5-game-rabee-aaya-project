const fetch = require('node-fetch');
const path = require('path');

const fetchData = (req, res) => {
  const url = 'https://api.rawg.io/api/games?key=e735fb7f64764085aed20235ec7455f9';
  fetch(url).then((response) => response.json())
    .then((data) => res.send((data))).catch(console.log);
};
const fetchResults = (req, res) => {
  const keyword = req.query.keyword

  const url = `https://api.rawg.io/api/games?search=${keyword}&key=e735fb7f64764085aed20235ec7455f9`;
  console.log(url);
  fetch(url).then((response) => response.json())
     .then((data) => res.send((data))).catch(console.log);
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

module.exports = { getHomePage, fetchData, fetchResults };
