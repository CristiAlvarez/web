"use strict";

//=========================================================================
//       Añade la clase a cada personaje mediante classList.add()
//=========================================================================
//-------------------------------------
//       Funciones JS
//-------------------------------------
// function seleccionarMario() {
//     marioGaleria.classList.add("seleccionado");

//     outputSalida.textContent = "Mario ha sido seleccionado!!!";
// }

// function ponerEstrellaLuigi() {
//     luigiGaleria.classList.add("estrella");

//     outputSalida.textContent = "Luigi tiene una estrella !!!!";
// }

// function girarYoshi() {
//     yoshiGaleria.classList.add("girando");

//     outputSalida.textContent = "Yoshi está girando......";
// }

// function enemistarBowser() {
//     bowserEnemigo.classList.add("enemigo");

//     outputSalida.textContent = "Bowser es tu enemigo !!";
// }

// function agrandarWario() {
//     warioGigante.classList.add("gigante");

//     outputSalida.textContent = "Ahora Wario es gigante!!";
// }

//-----------------------------------------------------------
//              Captura de elementos HTML
//-----------------------------------------------------------
const outputSalida = document.querySelector("#resultado-clases");
const botonMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");

const botonLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");

const botonYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");

const botonBowser = document.querySelector("#btn-enemigo-bowser");
const bowserGaleria = document.querySelector("#bowser-galeria");

const botonWario = document.querySelector("#btn-gigante-wario");
const warioGaleria = document.querySelector("#wario-galeria");

const botonKingBoo = document.querySelector("#btn-transparente-kingboo");
const kingBooGaleria = document.querySelector("#kingboo-galeria");

const botonSetaAzul = document.querySelector("#btn-pixelado-seta");
const setaAzulGaleria = document.querySelector("#seta-galeria");

const botonLakitu = document.querySelector("#btn-espejo-lakitu");
const lakituGaleria = document.querySelector("#lakitu-galeria");

//---------------------------------------------------------------------
//              Función general y su comentario
//---------------------------------------------------------------------

/** Function seleccionarPersonaje()
 * @param {HTMLElement} personaje - nombre de un querySelector
 * @param {string} clase - nomrbe de una clase CSS
 * @param {string} slogan - Texto para mostrar en un <output>
 * @param {HTMLElement} output - Elemento <output> para mostrar slogan
 *
 * @returns {void}
 */

function seleccionarPersonaje(personaje, clase, slogan, output = outputSalida) {
    const nombre = personaje.textContent;
    personaje.classList.add(clase);

    output.textContent = `${nombre} ${slogan}`;
}

//-----------------------------------------------------------------------
//                                   Eventos
//-----------------------------------------------------------------------
botonMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "ha sido seleccionado"));
botonLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "tiene una estrella !!!!"));
botonYoshi.addEventListener("click", () => seleccionarPersonaje(yoshiGaleria, "girando", "está girando...."));
botonBowser.addEventListener("click", () => seleccionarPersonaje(bowserGaleria, "enemigo", "es tu enemigo !!!!"));
botonWario.addEventListener("click", () => seleccionarPersonaje(warioGaleria, "gigante", "ahora es gigante"));
botonKingBoo.addEventListener("click", () => seleccionarPersonaje(kingBooGaleria, "transparente", "ya no se ve...."));
botonSetaAzul.addEventListener("click", () => seleccionarPersonaje(setaAzulGaleria, "pixelado", "es menor de edad!"));
botonLakitu.addEventListener("click", () => seleccionarPersonaje(lakituGaleria, "espejo", "está al revés...."));
