import { CONFIG } from "./config.js";

// ===================================
// PANEL DE VIDAS
// Columna en el lateral del escenario con una "cabeza" por vida.
// Muestra las vidas del personaje activo: las perdidas se ven apagadas.
// No guarda ningún dato: se dibuja a partir del Mario que reciba.
// Depende de: CONFIG
// ===================================

export class PanelVidas {
    constructor(escenario) {
        // Crear elemento HTML
        this.elemento = document.createElement("aside");
        this.elemento.className = "vidas";
        this.elemento.hidden = true; // no hay personaje hasta que se crea el primero

        this.nombre = document.createElement("p");
        this.nombre.className = "vidas-nombre";

        this.lista = document.createElement("ul");
        this.lista.className = "vidas-lista";

        this.elemento.append(this.nombre, this.lista);

        // Insertar el panel en el escenario
        escenario.appendChild(this.elemento);
    }

    /**
     * Dibuja las vidas del personaje. Con null (no hay personaje) se oculta.
     */
    actualizar(mario) {
        if (!mario) {
            this.elemento.hidden = true;
            return;
        }

        this.elemento.hidden = false;

        this.nombre.textContent = mario.nombre;

        this.lista.setAttribute("aria-label", `${mario.nombre}: ${mario.vidas} de ${CONFIG.VIDAS_INICIALES} vidas`);
        this.lista.replaceChildren();

        for (let i = 0; i < CONFIG.VIDAS_INICIALES; i++) {
            const vida = document.createElement("li");
            vida.className = "vida";

            // Las primeras "mario.vidas" están activas; el resto, perdidas
            if (i >= mario.vidas) {
                vida.classList.add("perdida");
            }

            // La imagen es el sprite completo; el CSS recorta la cabeza
            const imagen = document.createElement("img");
            imagen.src = CONFIG.RUTA_IMG + mario.sprite;
            imagen.alt = "";
            imagen.draggable = false;

            vida.appendChild(imagen);
            this.lista.appendChild(vida);
        }
    }
}
