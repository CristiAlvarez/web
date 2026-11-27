import { CONFIG } from "./config.js";

// ===================================
// PANEL DE VIDAS Y MONEDAS
// Columna en el lateral del escenario con:
//   - el nombre y una imagen por vida del personaje activo
//     (las vidas perdidas se ven apagadas)
//   - el contador de monedas recogidas
// No guarda ningún dato: se dibuja con lo que le pasen.
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

        // Contador de monedas: icono + cantidad
        this.monedas = document.createElement("p");
        this.monedas.className = "vidas-monedas";
        this.monedas.setAttribute("role", "status");

        const icono = document.createElement("span");
        icono.className = "icono-moneda";
        icono.setAttribute("aria-hidden", "true");

        this.cantidad = document.createElement("span");
        this.cantidad.className = "cantidad";

        this.monedas.append(icono, this.cantidad);

        this.elemento.append(this.nombre, this.lista, this.monedas);

        this.actualizarMonedas(0);

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

            // Imagen completa del personaje
            const imagen = document.createElement("img");
            imagen.src = CONFIG.RUTA_IMG + mario.sprite;
            imagen.alt = "";
            imagen.draggable = false;

            vida.appendChild(imagen);
            this.lista.appendChild(vida);
        }
    }

    /**
     * Actualiza el contador de monedas
     */
    actualizarMonedas(total) {
        this.cantidad.textContent = `× ${total}`;
        this.monedas.setAttribute("aria-label", `Monedas: ${total}`);
    }
}
