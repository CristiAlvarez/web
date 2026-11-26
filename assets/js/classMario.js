"use strict";

// ==================================================
//CLASE MARIO
// ==================================================

class Mario {
    constructor(nombre = "Mario", sprite = "superMario.webp") {
        this.nombre = nombre;
        this.sprite = sprite;
        this.vidas = 3;
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.escenario = document.querySelector("#escenario");

        // Crear elemento HTML
        this.elemento = document.createElement("figure");

        this.elemento.className = "mario";

        this.elemento.innerHTML = `
            <img
                src="${ruta}${this.sprite}"
                alt="${this.nombre}"
                draggable="false"
            >
            <figcaption></figcaption>
        `;

        // Insertar Mario en el escenario
        this.escenario.appendChild(this.elemento);

        // Actualizar posición
        this.actualizar();

        get.vidas(){
            return this.vidas;
        }
    }

    // ==================================================
    // ACTUALIZAR
    // ==================================================
    actualizar() {
        this.elemento.style.left = this.x + "px";

        this.elemento.style.transform = `
            scale(${this.scale})
            rotate(${this.rotation}deg)
        `;
    }

    // ==================================================
    // AVANZAR
    // ==================================================

    avanzar(velocidad = 500) {
        const maxX = this.escenario.clientWidth - this.elemento.offsetWidth;

        this.x = Math.min(this.x + 100, maxX);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} avanza.`);
    }

    // ==================================================
    // RETROCEDER
    // ==================================================

    retroceder(velocidad = 500) {
        this.x = Math.max(this.x - 100, 0);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} retrocede.`);
    }

    // ==================================================
    // SALTAR
    // ==================================================

    saltar() {
        this.elemento.classList.remove("saltando");

        // Reiniciar animación
        void this.elemento.offsetWidth;

        this.elemento.classList.add("saltando");

        setTimeout(() => {
            this.elemento.classList.remove("saltando");
        }, 700);

        this.mostrarMensaje(`${this.nombre} salta.`);
    }

    // ==================================================
    // DUPLICAR
    // ==================================================

    duplicar() {
        const nuevoMario = new Mario(this.nombre + " clon");

        nuevoMario.x = this.x + 100;
        nuevoMario.scale = this.scale;
        nuevoMario.rotation = this.rotation;

        nuevoMario.actualizar();

        // Registrar el nuevo objeto
        marios.push(nuevoMario);

        // Convertirlo en personaje activo
        marioActivo = nuevoMario;

        this.mostrarMensaje(`${this.nombre} se ha duplicado.`);

        return nuevoMario;
    }

    // ==================================================
    // AUMENTAR
    // ==================================================

    aumentar() {
        this.scale += 0.2;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} aumenta de tamaño.`);
    }

    // ==================================================
    // ENCOGER
    // ==================================================

    encoger() {
        this.scale = Math.max(0.4, this.scale - 0.2);

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} se encoge.`);
    }

    // ==================================================
    // ROTAR
    // ==================================================

    rotar(grados = 45) {
        this.rotation += grados;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} rota ${grados} grados.`);
    }

    // ==================================================
    // REINICIAR
    // ==================================================
    reiniciar() {
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} vuelve a su posición inicial.`);
    }

    // ==================================================
    // MOSTRAR MENSAJES
    // ==================================================

    mostrarMensaje(texto) {
        document.querySelector("#info").textContent = texto;
    }
}
// ==================================================
// ARRAYS RUTAS Y PERSONAJES
// ==================================================

const ruta = "../assets/img/superMario/";

const sprites = ["superMario.webp", "luigi.webp", "yoshi.webp", "wario.webp", "kingBoo.webp", "toadAzul.webp", "lakitu.webp", "peach.webp", "estrella.webp", "waluigi.webp", "toad.webp", "planta.webp", "donkeyKong.webp", "kameka.webp", "daisy.webp"];

const nombres = ["Mario", "Luigi", "Yoshi", "Wario", "King Boo", "Toad azul", "Lakitu", "Peach", "Estrella dorada", "Waluigi", "Toad", "Planta", "Donkey Kong", "Kameka", "Daisy"];

// prettier-ignore

// ==================================================
//              VARIABLES DE CONTROL
// ==================================================

// Array que almacena todos los objetos Mario
let marios = [];

// Personaje que recibirá las órdenes
let marioActivo = null;

// Contador de personajes
let contadorMario = 0;

// ==================================================
//              CREAR UN NUEVO PERSONAJE
// ==================================================

/** Function crearMario()
 *
 *  Crea una instancia de nuevoMario usando los arrays globales de nombres y sprintes sobre el siguiente índice
 *
 *  - nombre[] es un array que contiene los nombres de personajes
 *  - sprites[] es un array que contiene las rutas de los webp
 *
 * @returns {HTMLElement} -- Devuelve la imágen webp de un personaje
 */

function crearMario() {
    // Obtener índice del siguiente personaje
    const indice = contadorMario % nombres.length;

    // Obtener nombre e imagen
    const nombre = nombres[indice];
    const imagen = sprites[indice];

    // Crea una instancia
    const nuevoMario = new Mario(nombre, imagen);

    // Registrar el objeto
    marios.push(nuevoMario);

    // Convertirlo en un personaje activo
    marioActivo = nuevoMario;

    // Incrementa el contador
    contadorMario++;

    // Muestra el mensaje
    nuevoMario.mostrarMensaje(`${nuevoMario.nombre} ha sido creado.`);

    return nuevoMario;
}

// ==================================================
//           CAMBIAR DE PERSONAJE ACTIVO
// ==================================================

/** Function cambiarMarioActivo()
 *
 * Cambia el personaje activo entre los personajes instanciados con crearMario()
 *
 * @returns {void} -- No devuelve nada
 */

function cambiarMarioActivo() {
    // Comprobar que existen personajes
    if (marios.length === 0) return;

    // Buscar el índice del personaje activo
    let indice = marios.indexOf(marioActivo);

    // Seleccionar el siguiente personaje
    indice = (indice + 1) % marios.length;

    // Actualizar personaje activo
    marioActivo = marios[indice];

    // Mostrar mensaje
    marioActivo.mostrarMensaje(`${marioActivo.nombre} es ahora el personaje activo.`);
}

// ==================================================
//     EVENTOS PARA CREAR Y CAMBIAR DE ACTIVO
// ==================================================

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Enter") {
        crearMario();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "KeyS") {
        evento.preventDefault();

        cambiarMarioActivo();
    }
});

// ==================================================
//          EVENTOS DE MOVIMIENTO
// ==================================================

document.addEventListener("keydown", (evento) => {
    if (evento.code === "ArrowRight") {
        marioActivo.avanzar(800);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "ArrowLeft") {
        marioActivo.retroceder(800);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Space") {
        evento.preventDefault();
        marioActivo.saltar();
    }
});

// ==================================================
//          EVENTOS DE TRANSFORMACIÓN
// ==================================================

// Función flecha, solo funciona al click si lo dejas ()=>. Si se mete parámetro se activa al reiniciar la página.
document.addEventListener("keydown", (evento) => {
    if (evento.code === "KeyA") {
        marioActivo.aumentar();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "KeyE") {
        marioActivo.encoger();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "KeyR") {
        marioActivo.rotar(90);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "KeyD") {
        marioActivo.duplicar();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Backspace") {
        marioActivo.reiniciar();
    }
});
