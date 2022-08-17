// eslint-disable-next-line max-len
// fetch('/data').then((response) => response.json()).then((data) => console.log(data.results[0].name));

// https://api.rawg.io/api/games?search=call&key=e735fb7f64764085aed20235ec7455f9
const games = document.querySelector('.games');
const searchInput = document.querySelector('.search-input');

const createElement = (type, options, children) => {
  const element = document.createElement(type);
  element.className = options.class;
  element.src = options.src;

  if (Array.isArray(children) && children != null) {
    children.forEach((ele) => {
      element.appendChild(ele);
    });
  } else {
    element.textContent = children;
  }

  return element;
};

const createOneGame = (data) => {
  console.log(data.results);

  const gamesData = data.results;

  gamesData.forEach((game) => {
    console.log(1, game.name);
    const nameh3 = createElement('h3', { class: '' }, game.name);
    const gameName = createElement('div', { class: 'name' }, [nameh3]);
    // const gameImgSrc = 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg';
    const gameImg = createElement('img', { class: 'img', src: game.background_image }, null);
    const oneGame = createElement('div', { class: 'one-game' }, [gameImg, gameName]);
    games.appendChild(oneGame);
  });
};

fetch('/data').then((response) => response.json())
  .then((data) => createOneGame(data));

searchInput.addEventListener('keyup', (e) =>{
  let searchgame = new URLSearchParams({
    gameName: 'call',
  });
  fetch('search/call').then(console.log);
});