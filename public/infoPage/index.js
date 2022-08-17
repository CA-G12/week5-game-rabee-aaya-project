/* eslint-disable linebreak-style */
const getData = fetch('/public/infoPage/index.html/gameID/3328', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json())
  .catch((err) => console.log(err));

module.exports = getData;
