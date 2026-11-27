// ===================================
// PANTALLA GAME OVER
// Capa que cubre el escenario cuando un personaje se queda sin vidas.
// No sabe nada de las reglas del juego: solo se muestra, suena
// y avisa (con una función) cuando el jugador pide volver a jugar.
// No depende de ningún otro archivo.
// ===================================

export class PantallaGameOver {
    constructor(escenario, alReiniciar) {
        this.audio = null;

        // Crear elemento HTML
        this.elemento = document.createElement("div");
        this.elemento.className = "gameover";
        this.elemento.setAttribute("role", "alertdialog");
        this.elemento.setAttribute("aria-label", "Fin de la partida");
        this.elemento.hidden = true;

        this.elemento.innerHTML = `
            <h2 class="gameover-titulo" aria-label="Game over"></h2>
            <p class="gameover-detalle"></p>
            <button class="gameover-boton" type="button">Volver a jugar</button>
        `;

        this.detalle = this.elemento.querySelector(".gameover-detalle");
        this.boton = this.elemento.querySelector(".gameover-boton");

        // Cada letra es un <span> para poder animarla con retraso (--i)
        const titulo = this.elemento.querySelector(".gameover-titulo");

        [..."GAME OVER"].forEach((letra, i) => {
            const span = document.createElement("span");
            span.textContent = letra === " " ? "\u00A0" : letra;
            span.setAttribute("aria-hidden", "true");
            span.style.setProperty("--i", i);
            titulo.appendChild(span);
        });

        this.boton.addEventListener("click", alReiniciar);

        escenario.appendChild(this.elemento);
    }

    // ===================================
    // MOSTRAR / OCULTAR
    // ===================================

    mostrar(nombre, monedas) {
        this.detalle.textContent = `${nombre} se ha quedado sin vidas. Monedas recogidas: ${monedas}`;

        // Al quitar "hidden" el CSS reproduce las animaciones desde el principio
        this.elemento.hidden = false;

        this.sonar();
        this.boton.focus({ preventScroll: true });
    }

    ocultar() {
        this.elemento.hidden = true;
    }

    // ===================================
    // SONIDO
    // Cuatro notas descendentes generadas con la Web Audio API
    // (no hace falta ningún archivo de audio).
    // ===================================

    sonar() {
        try {
            this.audio ??= new AudioContext();

            if (this.audio.state === "suspended") this.audio.resume();

            // [frecuencia (Hz), inicio (s), duración (s)]
            const notas = [
                [523, 0.0, 0.18],
                [392, 0.2, 0.18],
                [330, 0.4, 0.18],
                [262, 0.6, 1.0],
            ];

            for (const [frecuencia, inicio, duracion] of notas) {
                const oscilador = this.audio.createOscillator();
                const volumen = this.audio.createGain();
                const t = this.audio.currentTime + inicio;

                oscilador.type = "square";
                oscilador.frequency.value = frecuencia;

                volumen.gain.setValueAtTime(0.08, t);
                volumen.gain.exponentialRampToValueAtTime(0.0001, t + duracion);

                oscilador.connect(volumen).connect(this.audio.destination);
                oscilador.start(t);
                oscilador.stop(t + duracion);
            }
        } catch {
            // Sin audio disponible: el juego sigue funcionando igual
        }
    }
}
