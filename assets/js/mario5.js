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
/* Mario */
const botonMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");
/* Luigi */
const botonLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");
/* Yoshi */
const botonYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");
/* Bowser */
const botonBowser = document.querySelector("#btn-enemigo-bowser");
const bowserGaleria = document.querySelector("#bowser-galeria");
/* Wario */
const botonWario = document.querySelector("#btn-gigante-wario");
const warioGaleria = document.querySelector("#wario-galeria");
/* King Boo */
const botonKingBoo = document.querySelector("#btn-transparente-kingboo");
const kingBooGaleria = document.querySelector("#kingboo-galeria");
/* Seta azul */
const botonSetaAzul = document.querySelector("#btn-pixelado-seta");
const setaAzulGaleria = document.querySelector("#seta-galeria");
/* Lakitu */
const botonLakitu = document.querySelector("#btn-espejo-lakitu");
const lakituGaleria = document.querySelector("#lakitu-galeria");

//-----------------------------------------------------------
//           Captura de elementos HTML con arrays
//-----------------------------------------------------------

let botonesControles = document.querySelectorAll("#personajes-css ul.lista-controles li button");
let galeriaPersonaje = document.querySelectorAll("#personajes-css ul.lista-personajes li figure");
let classPersonaje = ["seleccionado", "estrella", "girando", "enemigo", "gigante", "transparente", "pixelado", "espejo"];

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
    let message = "";
    // personaje.classList.add(clase);
    personaje.classList.toggle(clase);

    if (personaje.classList.contains(clase)) {
        message = `A ${nombre} ${slogan}`;
    } else {
        message = `A ${nombre} ya no ${slogan}`;
    }
    output.textContent = message;
}

//-----------------------------------------------------------------------
//                                   Eventos
//-----------------------------------------------------------------------

// botonMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "está seleccionado."));
// botonLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "tiene una estrella !!!!"));
// botonYoshi.addEventListener("click", () => seleccionarPersonaje(yoshiGaleria, "girando", "está girando...."));
// botonBowser.addEventListener("click", () => seleccionarPersonaje(bowserGaleria, "enemigo", "es tu enemigo !!!!"));
// botonWario.addEventListener("click", () => seleccionarPersonaje(warioGaleria, "gigante", " es gigante"));
// botonKingBoo.addEventListener("click", () => seleccionarPersonaje(kingBooGaleria, "transparente", "es transparente...."));
// botonSetaAzul.addEventListener("click", () => seleccionarPersonaje(setaAzulGaleria, "pixelado", "es menor de edad!"));
// botonLakitu.addEventListener("click", () => seleccionarPersonaje(lakituGaleria, "espejo", "está al revés...."));

//prettier-ignore
galeriaPersonaje.forEach(function (personaje, indice) {
    botonesControles[indice].addEventListener(
        "click",
        ()=> seleccionarPersonaje(
            personaje,
            classPersonaje[indice],
            " se le agrega la clase " + classPersonaje[indice]      
         )

    );
});
