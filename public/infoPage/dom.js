/* eslint-disable linebreak-style */
const gameTitle = document.getElementById('item-title');
const header = document.getElementsByTagName('header')[0];
const photoGallery = document.getElementById('photoGallery');
const itemDescription = document.getElementById('itemDescription');

getData.then((data) => {
  gameTitle.innerText = data.name;
  // header.style.backgroundImage = `url(${data.background_image})`;
  itemDescription.innerText = data.description_raw;
});
