"use strict";

/*
//-----------------------------------------------
//                Ejercicio 1a
//-----------------------------------------------

let figura = document.querySelectorAll("#galeria-mario figure");

let imgMarioBross = ["../assets/img/superMario/superMario.webp", "../assets/img/superMario/bowser.webp", "../assets/img/superMario/estrella.webp", "../assets/img/superMario/kingBoo.webp", "../assets/img/superMario/luigi.webp", "../assets/img/superMario/peach.webp", "../assets/img/superMario/yoshi.webp", "../assets/img/superMario/wario.webp", "../assets/img/superMario/setaAzul.webp", "../assets/img/superMario/lakitu.webp"];

figura.forEach(function (figura, indice) {
    figura.style.backgroundImage = `url("${imgMarioBross[indice]}")`;
});
*/

//-----------------------------------------------
//                Ejercicio 1b
//-----------------------------------------------

const ulGaleriaMario = document.querySelector(`#galeria-mario ul.galeria`);

ulGaleriaMario.classList.add("personajes");

//-----------------------------------------------
//                Ejercicio 1c
//-----------------------------------------------

let personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King Boo", "Estrella", "Lakitu", "Peach", "Seta Azul"];

let bgGaleriaMario = ["#FFB3BA", "#FFDEB8", "#FFFFB8", "#B8FFBB", "#B8E0FF", "#00bfff", "#ff6bb5", "#ffd900", "#32cd32", "#ff4400"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgGaleriaMario[indice];
});
captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});
