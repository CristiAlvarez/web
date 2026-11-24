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

let bgGaleriaMario = ["LightCoral", "PeachPuff", "LightYellow", "PaleGreen", "PaleTurquoise", "DeepSkyBlue", "DeepPink", "Gold", "LimeGreen", "OrangeRed"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

//-----------------------------------------------
//                Ejercicio 2a
//-----------------------------------------------

// 1.- elemento html output#info
const info = document.querySelector("#info");

// 2.- Aquí se guardan todos los lis de la paleta con el texto con el nombre del color
const itemsPaletaColores = document.querySelectorAll("#paleta-colores li");

// 3.- aún no hay ningún color elegido
let colorSeleccionado = null;

// 4.- Pintar cada casilla de la paleta con el color que indica su texto
itemsPaletaColores.forEach(function (li) {
    li.style.backgroundColor = li.textContent;
});

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}

function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero escoge un color de la paleta.";
        return;
    }
    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}

itemsPaletaColores.forEach(function (li) {
    li.onclick = seleccionarColor;
});
figuras.forEach(function (figura) {
    figura.onclick = pintarFigura;
});

//-----------------------------------------------
//                Ejercicio 2b
//-----------------------------------------------

// Crear otro item a la lista galería del article galeria-mario
// tendrá también un figure y un figcaption

// crear una variable y utilizar createElement

// Guardamos el elemento ul.galeria en una variable 'listaGaleria'

let itemGaleria = document.createElement("li");
let figureGaleria = document.createElement("figure");
let captionGaleria = document.createElement("figcaption");

ulGaleriaMario.appendChild(itemGaleria);
itemGaleria.appendChild(figureGaleria);
figureGaleria.appendChild(captionGaleria);

figureGaleria.classList.add("img-before");

personajesGaleriaMario.push("WaLuigui");
bgGaleriaMario.push("BlueViolet");

captionGaleria.textContent = personajesGaleriaMario[personajesGaleriaMario.length - 1];

// "WaLuigi", "Toad", "Planta carnívora", "Donkey Kong", "Kameka", "Daisy"
// "BlueViolet", "LightSeaGreen", "DarkBlue", "Silver", "Orange", "MediumSlateBlued");

captions = document.querySelectorAll("#galeria-mario figcaption");
captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});

figuras = document.querySelectorAll("#galeria-mario figure");
figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgGaleriaMario[indice];
});
