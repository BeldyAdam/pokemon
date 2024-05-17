import Pokemon  from "./Pokemon.js";

let pok1 = new Pokemon("Ditto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg","Adatbazis jó xd", "body");
let pok2 = new Pokemon("Pikachu","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png","🔌", "body");

$("body").append(`<h2>${JSON.stringify(pok1.nev)}</h2>`);
/* $("body").append(`<h2>${pok1.kep}</h2>`); */
$("body").append(`<img style="width:300px" src="${pok1.kep}" alt="${pok1.nev}">`)
$("body").append(`<h2>${JSON.stringify(pok1.mondat)}</h2>`);
pok1.mondat = "Heloka";
console.log(pok1);

/* pok1.megjelenit(); */