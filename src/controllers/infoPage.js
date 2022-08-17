/* eslint-disable linebreak-style */
const path = require('path');
const fetch = require('node-fetch');

const infoPagePath = path.join(__dirname, '..', '..', 'public', 'infoPage', 'index.html');
const infoPagePathCSS = path.join(__dirname, '..', '..', 'public', 'infoPage', 'index.css');
const infoPagePathJS = path.join(__dirname, '..', '..', 'public', 'infoPage', 'index.js');
const infoPagePathDOM = path.join(__dirname, '..', '..', 'public', 'infoPage', 'dom.js');

/* (req, res) => {
  const response = controller.getInfoPage.getGameInfo(req.params.gameID);
  response.then((data) => res.send(data));
});
 */

const getGameInfo = (gameID) => {
  console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
  const url = `https://api.rawg.io/api/games/${gameID}?key=d149796b02604c499701919d5dbc2639`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .catch((err) => console.log(err));
};

module.exports = {
  html: (_req, res) => {
    res.sendFile(infoPagePath);
  },
  css: (_req, res) => {
    res.sendFile(infoPagePathCSS);
  },
  js: (_req, res) => {
    res.sendFile(infoPagePathJS);
  },
  dom: (_req, res) => {
    res.sendFile(infoPagePathDOM);
  },
  getGameInfo,
};
