fetch('/data').then((response) => response.json()).then((data) => console.log(data.results[0].name));

fetch('/data').then((response) => response.json()).then((data) => handelData(data));
//https://api.rawg.io/api/games?search=call&key=e735fb7f64764085aed20235ec7455f9