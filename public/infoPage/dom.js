/* eslint-disable linebreak-style */
const gameTitle = document.getElementById('item-title');
const header = document.getElementsByTagName('header')[0];
const photoGallery = document.getElementById('photoGallery');
const itemDescription = document.getElementById('itemDescription');
const game = JSON.parse(localStorage.getItem('game'));

const createScreenShots = (screenShotURL) => {
  const img = document.createElement('img');
  img.src = screenShotURL;
  img.className = 'photo';
  photoGallery.appendChild(img);
};

getData(game.gameID).then((data) => {
  gameTitle.innerText = data.name;
  itemDescription.innerText = data.description_raw;
  game.screenShots.forEach((element) => {
    createScreenShots(element.image);
  });
});
