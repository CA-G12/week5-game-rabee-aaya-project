/* eslint-disable linebreak-style */
const getData = (gameID) => fetch(`/public/infoPage/index.html/gameID/${gameID}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json())
  .catch((err) => console.log(err));

module.exports = getData;
