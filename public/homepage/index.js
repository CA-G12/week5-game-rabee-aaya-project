const games = document.querySelector('.games');
const searchInput = document.querySelector('.search-input');

games.textContent = "Loading games..";

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
  games.textContent = '';
  

  const gamesData = data.results;

  gamesData.forEach((game) => {
    const nameh3 = createElement('h3', { class: '' }, game.name);
    const gameName = createElement('div', { class: 'name' }, [nameh3]);
    const gameImg = createElement('img', { class: 'img', src: game.background_image }, null);
    const oneGame = createElement('div', { class: 'one-game' }, [gameImg, gameName]);
    games.appendChild(oneGame);

    oneGame.addEventListener('click', () => {
      const gameID = game.id;
      const screenShots = game['short_screenshots'];
      localStorage.setItem('game', JSON.stringify({ gameID, screenShots }));
    //  fetch(`/public/infoPage/index.html/gameID/${game.id}`).then((response) => response.json()).then((data) => console.log(data));
    });
  });
};

fetch('/data').then((response) => response.json())
  .then((data) => createOneGame(data));

searchInput.addEventListener('keyup', () => {
  fetch(`/search?keyword=${searchInput.value}`).then((response) => response.json())
    .then((data) => createOneGame(data));
});
