import { CONFIG } from "./config.js";
import { Mario } from "./mario.js";
import { Moneda } from "./moneda.js";
import { Suelo } from "./precipicio.js";
import { PantallaGameOver } from "./gameover.js";
import { PanelVidas } from "./vidas.js";

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

        this.marcador = document.querySelector("#contadorMonedas");
        this.terminado = false; // true cuando hay game over

        this.pantallaGameOver = new PantallaGameOver(escenario, () => this.reiniciarPartida());
        this.escenario.addEventListener("sinvidas", (evento) => this.gameOver(evento.detail));

        this.panelVidas = new PanelVidas(escenario);

        // Solo se redibuja si las vidas que cambian son las del personaje activo
        this.escenario.addEventListener("cambiovidas", (evento) => {
            if (evento.detail === this.marioActivo) this.actualizarVidas();
        });
    }

    // ===================================
    // ARRANQUE
    // ===================================

    iniciar() {
        this.generarMonedas();
        this.bucle();
        this.suelo.generar();
    }

    // ===================================
    // PERSONAJES
    // ===================================

    crearMario() {
        // Siguiente personaje de la lista (vuelve al principio al acabar)
        const indice = this.contadorMario % CONFIG.NOMBRES.length;
        const nombre = CONFIG.NOMBRES[indice];
        const sprite = CONFIG.SPRITES[indice];

        const nuevoMario = new Mario(nombre, sprite, this.escenario);

        this.registrar(nuevoMario);
        this.contadorMario++;

        nuevoMario.mostrarMensaje(`${nombre} ha sido creado.`);

        return nuevoMario;
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

    generarMonedas(cantidad = CONFIG.CANTIDAD_MONEDAS) {
        for (let i = 0; i < cantidad; i++) {
            this.monedas.push(new Moneda(this.escenario));
        }
    }

    recogerMoneda(mario, moneda) {
        mario.cogerMoneda(moneda);

        this.monedas = this.monedas.filter((m) => m !== moneda);

        this.totalMonedas++;
        this.marcador.textContent = this.totalMonedas;

        let mensaje = `${mario.nombre} coge una moneda (lleva ${mario.monedas}).`;

        // Si era la última, programamos una tanda nueva
        if (this.monedas.length === 0) {
            mensaje += " ¡Era la última! Aparecen monedas nuevas.";
            setTimeout(() => this.generarMonedas(), 800);
        }

        mario.mostrarMensaje(mensaje);
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
        this.marcador.textContent = 0;
        document.querySelector("#info").textContent = "¡Pulsa Crear nuevo Mario para comenzar!";

        // Nuevo mapa
        this.suelo.generar();
        this.generarMonedas();

        this.terminado = false;
        this.bucle();
    }

    // ===================================
    // COLISIONES
    // ===================================

    comprobarColisiones() {
        // [...] copia el array: recogerMoneda() lo modifica mientras lo recorremos
        for (const moneda of [...this.monedas]) {
            if (moneda.recogida) continue;

            const rectMoneda = moneda.elemento.getBoundingClientRect();
            const mario = this.marios.find((m) => m.toca(rectMoneda));

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
