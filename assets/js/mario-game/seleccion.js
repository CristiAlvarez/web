import { CONFIG } from "./config.js";

// ===================================
// PANTALLA DE SELECCIÓN DE PERSONAJE (CARRUSEL)
// Fila de personajes que se desliza con el dedo (táctil) o con las
// flechas (ratón). El personaje que queda en el centro se ve más grande:
// tocarlo (o hacer clic) lo elige; tocar otro lo lleva al centro.
// No conoce las reglas del juego: avisa del personaje elegido
// llamando a la función que recibe (Juego decide qué hacer).
// Depende de: CONFIG
// ===================================

export class PantallaSeleccion {
    constructor(escenario, alElegir) {
        this.alElegir = alElegir;

        this.indiceCentral = 0; // personaje que está en el centro
        this.pendiente = false; // para no recalcular en cada evento de scroll

        // Crear elemento HTML
        this.elemento = document.createElement("div");
        this.elemento.className = "seleccion";
        this.elemento.setAttribute("role", "dialog");
        this.elemento.setAttribute("aria-label", "Elegir personaje");
        this.elemento.hidden = true;

        const titulo = document.createElement("h2");
        titulo.className = "seleccion-titulo";
        titulo.textContent = "Elige tu personaje";

        // Carrusel: flecha + lista + flecha
        const carrusel = document.createElement("div");
        carrusel.className = "carrusel";

        this.anterior = this.crearFlecha("anterior", "Personaje anterior", "‹");
        this.siguiente = this.crearFlecha("siguiente", "Personaje siguiente", "›");

        this.lista = document.createElement("ul");
        this.lista.className = "seleccion-lista";
        this.lista.setAttribute("aria-label", "Personajes");

        // Un elemento por personaje (el índice coincide con CONFIG.NOMBRES y CONFIG.SPRITES)
        this.items = CONFIG.NOMBRES.map((nombre, indice) => {
            const item = document.createElement("li");

            const boton = document.createElement("button");
            boton.type = "button";
            boton.className = "personaje";
            boton.dataset.indice = indice;

            // Sprite completo del personaje
            const cara = document.createElement("span");
            cara.className = "cara";

            const imagen = document.createElement("img");
            imagen.src = CONFIG.RUTA_IMG + CONFIG.SPRITES[indice];
            imagen.alt = "";
            imagen.draggable = false;

            cara.appendChild(imagen);

            const etiqueta = document.createElement("span");
            etiqueta.className = "nombre";
            etiqueta.textContent = nombre;

            boton.append(cara, etiqueta);
            item.appendChild(boton);
            this.lista.appendChild(item);

            return item;
        });

        const ayuda = document.createElement("p");
        ayuda.className = "seleccion-ayuda";
        // ayuda.textContent = "Toca el personaje central para elegirlo.";

        carrusel.append(this.anterior, this.lista, this.siguiente);
        this.elemento.append(titulo, carrusel, ayuda);

        this.iniciarEventos();

        // Insertar la pantalla en el escenario
        escenario.appendChild(this.elemento);
    }

    crearFlecha(clase, etiqueta, simbolo) {
        const flecha = document.createElement("button");
        flecha.type = "button";
        flecha.className = `carrusel-flecha ${clase}`;
        flecha.setAttribute("aria-label", etiqueta);
        flecha.textContent = simbolo;

        return flecha;
    }

    // ===================================
    // EVENTOS
    // "click" sirve para ratón y para toque en pantallas táctiles.
    // ===================================

    iniciarEventos() {
        this.anterior.addEventListener("click", () => this.irA(this.indiceCentral - 1));
        this.siguiente.addEventListener("click", () => this.irA(this.indiceCentral + 1));

        // Un solo escuchador para toda la lista (delegación de eventos)
        this.lista.addEventListener("click", (evento) => {
            const boton = evento.target.closest("button[data-indice]");

            if (!boton || this.elemento.hidden) return;

            const indice = Number(boton.dataset.indice);

            if (indice === this.indiceCentral) {
                this.ocultar();
                this.alElegir(indice);
            } else {
                this.irA(indice);
            }
        });

        // Al deslizar, se recalcula qué personaje queda en el centro
        this.lista.addEventListener(
            "scroll",
            () => {
                if (this.pendiente) return;

                this.pendiente = true;

                requestAnimationFrame(() => {
                    this.pendiente = false;
                    this.marcarCentral(this.buscarCentral());
                });
            },
            { passive: true },
        );
    }

    // ===================================
    // CARRUSEL
    // ===================================

    /**
     * Desplaza la lista para dejar el personaje indicado en el centro
     */
    irA(indice, suave = true) {
        if (indice < 0 || indice >= this.items.length) return;

        const caja = this.lista.getBoundingClientRect();
        const item = this.items[indice].getBoundingClientRect();
        const desplazamiento = item.left + item.width / 2 - (caja.left + caja.width / 2);

        this.lista.scrollBy({ left: desplazamiento, behavior: suave ? "smooth" : "instant" });

        this.marcarCentral(indice);
    }

    /**
     * Índice del personaje cuyo centro está más cerca del centro de la lista
     */
    buscarCentral() {
        const caja = this.lista.getBoundingClientRect();
        const centro = caja.left + caja.width / 2;

        let mejor = 0;
        let distanciaMejor = Infinity;

        this.items.forEach((item, indice) => {
            const r = item.getBoundingClientRect();
            const distancia = Math.abs(r.left + r.width / 2 - centro);

            if (distancia < distanciaMejor) {
                distanciaMejor = distancia;
                mejor = indice;
            }
        });

        return mejor;
    }

    /**
     * Destaca al personaje central y activa/desactiva las flechas
     */
    marcarCentral(indice) {
        this.indiceCentral = indice;

        this.items.forEach((item, i) => {
            item.firstElementChild.classList.toggle("central", i === indice);
        });

        this.anterior.disabled = indice === 0;
        this.siguiente.disabled = indice === this.items.length - 1;
    }

    // ===================================
    // MOSTRAR / OCULTAR
    // ===================================

    mostrar() {
        // Al quitar "hidden" el CSS reproduce la animación desde el principio
        this.elemento.hidden = false;

        // Siempre se empieza por el primer personaje
        this.irA(0, false);
    }

    ocultar() {
        this.elemento.hidden = true;
    }
}
