import { CONFIG } from "./config.js";
import { aleatorio } from "./utils.js";

// ===================================
// PRECIPICIOS
// Zonas del escenario sin suelo. Si el centro de un personaje
// queda sobre una de ellas (y no está saltando), cae.
// Depende de: CONFIG, aleatorio() (utils.js)
// ===================================

// ===================================
// CLASE PRECIPICIO
// Un hueco: solo sabe dónde empieza y cuánto mide.
// ===================================

export class Precipicio {
    constructor(x, ancho) {
        this.x = x;
        this.ancho = ancho;
    }

    get fin() {
        return this.x + this.ancho;
    }

    /**
     * ¿Esta coordenada horizontal (px) cae dentro del hueco?
     */
    contiene(px) {
        return px > this.x && px < this.fin;
    }

    /**
     * ¿Queda este hueco demasiado cerca de otro?
     * Se deja una separación para que siempre haya suelo donde apoyarse.
     */
    estaCercaDe(otro, separacion) {
        return this.x < otro.fin + separacion && otro.x < this.fin + separacion;
    }
}

// ===================================
// CLASE SUELO
// Crea los precipicios, "recorta" el suelo de ladrillos
// y dice si un personaje está sobre el vacío.
// ===================================

export class Suelo {
    constructor(escenario) {
        this.escenario = escenario;
        this.precipicios = [];
    }

    // ===================================
    // GENERACIÓN
    // ===================================

    generar(cantidad = CONFIG.CANTIDAD_PRECIPICIOS) {
        const anchoEscenario = this.escenario.clientWidth;
        let intentos = 0;
        this.precipicios = [];
        // Se prueban posiciones al azar hasta colocar todos (o agotar los intentos)
        while (this.precipicios.length < cantidad && intentos < 100) {
            intentos++;

            const ancho = aleatorio(CONFIG.PRECIPICIO_ANCHO_MIN, CONFIG.PRECIPICIO_ANCHO_MAX);
            const maxX = anchoEscenario - ancho - CONFIG.PRECIPICIO_MARGEN_FINAL;

            // Pantalla demasiado estrecha para este hueco
            if (maxX < CONFIG.PRECIPICIO_INICIO_SEGURO) continue;

            const nuevo = new Precipicio(aleatorio(CONFIG.PRECIPICIO_INICIO_SEGURO, maxX), ancho);

            const choca = this.precipicios.some((p) => nuevo.estaCercaDe(p, CONFIG.PRECIPICIO_SEPARACION));

            if (!choca) {
                this.precipicios.push(nuevo);
            }
        }

        this.dibujar();
    }

    // ===================================
    // DIBUJO
    // Le pasa al CSS una máscara con los huecos (variable --mascara-suelo).
    // Donde la máscara es transparente no se ve el ladrillo y se ve el cielo.
    // ===================================

    dibujar() {
        const ordenados = [...this.precipicios].sort((a, b) => a.x - b.x);

        const tramos = [];
        let cursor = 0;

        for (const p of ordenados) {
            tramos.push(`#000 ${cursor}px ${p.x}px`); // suelo
            tramos.push(`transparent ${p.x}px ${p.fin}px`); // hueco
            cursor = p.fin;
        }

        tramos.push(`#000 ${cursor}px 100%`); // suelo hasta el final

        this.escenario.style.setProperty("--mascara-suelo", `linear-gradient(to right, ${tramos.join(", ")})`);
    }

    // ===================================
    // DETECCIÓN
    // ===================================

    /**
     * ¿Está este personaje sobre un hueco y sin saltar?
     */
    estaSobreVacio(mario) {
        if (mario.estaSaltando()) return false;

        const centro = mario.centroX();

        return this.precipicios.some((p) => p.contiene(centro));
    }
}
