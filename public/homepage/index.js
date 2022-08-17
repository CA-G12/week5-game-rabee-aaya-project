fetch('/data').then((response) => response.json()).then((data) => console.log(data.results[0].name));
