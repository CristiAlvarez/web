import { CONFIG } from "./config.js";
import { Mario } from "./mario.js";
import { Moneda } from "./moneda.js";
import { Suelo } from "./precipicio.js";
import { PantallaGameOver } from "./gameover.js";
import { PanelVidas } from "./vidas.js";
import { PantallaSeleccion } from "./seleccion.js";
import { MonedaMaldita } from "./monedasmalditas.js";

// ===================================
// CLASE JUEGO
// Es el "director": guarda el estado (qué personajes y monedas hay)
// y coordina a Mario y Moneda. Antes eran variables globales sueltas.
// Depende de: CONFIG, Mario, Moneda
// ===================================

export class Juego {
    constructor(escenario) {
        this.escenario = escenario;

        this.marios = []; // todos los personajes
        this.marioActivo = null; // el que recibe las órdenes
        this.contadorMario = 0; // para elegir el siguiente nombre y sprite

        this.monedas = []; // monedas que hay ahora en el escenario
        this.totalMonedas = 0; // monedas recogidas entre todos
        this.suelo = new Suelo(escenario);

        this.terminado = false; // true cuando hay game over

        this.pantallaGameOver = new PantallaGameOver(escenario, () => this.reiniciarPartida());
        this.escenario.addEventListener("sinvidas", (evento) => this.gameOver(evento.detail));

        this.panelVidas = new PanelVidas(escenario);
        this.eligiendo = true; // true mientras se ve la pantalla de selección

        this.pantallaSeleccion = new PantallaSeleccion(escenario, (indice) => this.elegirPersonaje(indice));

        // Solo se redibuja si las vidas que cambian son las del personaje activo
        this.escenario.addEventListener("cambiovidas", (evento) => {
            if (evento.detail === this.marioActivo) this.actualizarVidas();
        });
    }

    /**
     * ¿Hay que ignorar teclas y botones? (game over o eligiendo personaje)
     */
    get pausado() {
        return this.terminado || this.eligiendo;
    }

    // ===================================
    // ARRANQUE
    // ===================================

    iniciar() {
        this.pantallaSeleccion.mostrar();
        this.generarMonedas();
        this.bucle();
        this.suelo.generar();
    }

    // ===================================
    // PERSONAJES
    // ===================================

    crearMario(indice = this.contadorMario % CONFIG.NOMBRES.length) {
        const nombre = CONFIG.NOMBRES[indice];
        const sprite = CONFIG.SPRITES[indice];

        const nuevoMario = new Mario(nombre, sprite, this.escenario);

        this.registrar(nuevoMario);
        this.contadorMario = indice + 1; // el siguiente continúa después del elegido

        nuevoMario.mostrarMensaje(`${nombre} ha sido creado.`);

        return nuevoMario;
    }

    /**
     * El jugador ha elegido personaje en la pantalla de selección
     */
    elegirPersonaje(indice) {
        this.eligiendo = false;
        this.crearMario(indice);
    }

    /**
     * Guarda el personaje en la lista y lo convierte en el activo
     */
    registrar(mario) {
        this.marios.push(mario);
        this.marioActivo = mario;
        this.actualizarVidas();
    }

    cambiarMarioActivo() {
        if (this.marios.length === 0) return;

        const indice = (this.marios.indexOf(this.marioActivo) + 1) % this.marios.length;

        this.marioActivo = this.marios[indice];
        this.actualizarVidas();
        this.marioActivo.mostrarMensaje(`${this.marioActivo.nombre} es ahora el personaje activo.`);
    }

    duplicarActivo() {
        if (!this.marioActivo) return;

        this.registrar(this.marioActivo.duplicar());
    }

    actualizarVidas() {
        this.panelVidas.actualizar(this.marioActivo);
    }

    // ===================================
    // MONEDAS
    // ===================================

    generarMonedas(cantidad = CONFIG.CANTIDAD_MONEDAS, malditas = CONFIG.CANTIDAD_MALDITAS) {
        for (let i = 0; i < cantidad; i++) {
            // Las últimas de la tanda son malditas (la posición es aleatoria, así que no importa el orden)
            const esMaldita = i >= cantidad - malditas;

            this.monedas.push(esMaldita ? new MonedaMaldita(this.escenario) : new Moneda(this.escenario));
        }
    }

    recogerMoneda(mario, moneda) {
        // La moneda maldita no suma: quita una vida
        if (moneda.esMaldita) {
            this.recogerMonedaMaldita(mario, moneda);
            return;
        }

        mario.cogerMoneda(moneda);

        this.monedas = this.monedas.filter((m) => m !== moneda);

        this.totalMonedas++;
        this.panelVidas.actualizarMonedas(this.totalMonedas);

        let mensaje = `${mario.nombre} coge una moneda (lleva ${mario.monedas}).`;

        // Si ya no quedan monedas normales, se retiran las malditas que sobren
        // y se programa una tanda nueva
        if (this.monedas.every((m) => m.esMaldita)) {
            this.monedas.forEach((m) => m.recoger());
            this.monedas = [];

            mensaje += " ¡Era la última! Aparecen monedas nuevas.";
            setTimeout(() => this.generarMonedas(), 800);
        }

        mario.mostrarMensaje(mensaje);
    }

    recogerMonedaMaldita(mario, moneda) {
        moneda.recoger(); // desaparece igual que una normal
        this.monedas = this.monedas.filter((m) => m !== moneda);

        mario.perderVida();

        // Si le quedan vidas, el mensaje explica qué ha pasado
        // (con 0 vidas se queda el de perderVida y salta el game over)
        if (mario.vidas > 0) {
            mario.mostrarMensaje(`¡Moneda maldita! ${mario.nombre} pierde una vida (le quedan ${mario.vidas}).`);
        }
    }

    // ===================================
    // FIN DE PARTIDA
    // ===================================

    gameOver(mario) {
        if (this.terminado) return;

        this.terminado = true;
        this.pantallaGameOver.mostrar(mario.nombre, this.totalMonedas);
    }

    reiniciarPartida() {
        this.pantallaGameOver.ocultar();

        // Quitar del escenario todo lo de la partida anterior
        this.marios.forEach((m) => m.elemento.remove());
        this.monedas.forEach((m) => m.elemento.remove());

        this.marios = [];
        this.marioActivo = null;
        this.actualizarVidas();
        this.contadorMario = 0;
        this.monedas = [];
        this.totalMonedas = 0;
        this.panelVidas.actualizarMonedas(0);
        document.querySelector("#info").textContent = "¡Elige un personaje para comenzar!";

        // Nuevo mapa
        this.suelo.generar();
        this.generarMonedas();

        this.terminado = false;
        this.bucle();
        this.eligiendo = true;
        this.pantallaSeleccion.mostrar();
    }

    // ===================================
    // COLISIONES
    // ===================================

    comprobarColisiones() {
        // [...] copia el array: recogerMoneda() lo modifica mientras lo recorremos
        for (const moneda of [...this.monedas]) {
            if (moneda.recogida) continue;

            const rectMoneda = moneda.elemento.getBoundingClientRect();
            const mario = this.marios.find((m) => !m.cayendo && m.toca(rectMoneda));

            if (mario) {
                this.recogerMoneda(mario, moneda);
            }
        }
    }

    comprobarCaidas() {
        for (const mario of this.marios) {
            if (mario.cayendo) continue;

            if (this.suelo.estaSobreVacio(mario)) {
                mario.caer();
            }
        }
    }

    /**
     * Bucle del juego: se repite en cada fotograma.
     * Hace falta porque Mario se mueve con una transición CSS y salta
     * con una animación: su posición real cambia sin que el código lo note.
     */
    bucle() {
        if (this.terminado) return;
        this.comprobarColisiones();
        this.comprobarCaidas();
        requestAnimationFrame(() => this.bucle());
    }
}
