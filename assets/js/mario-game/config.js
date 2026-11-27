// ===================================
// CONFIGURACIÓN
// Todos los "números mágicos" y listas de datos en un único sitio.
// Si hay que cambiar algo del juego, se cambia aquí.
// ===================================

export const CONFIG = {
    // Carpeta de las imágenes (relativa al HTML)
    RUTA_IMG: "../assets/img/superMario/",

    // prettier-ignore
    SPRITES: [
        "superMario.webp", 
        "luigi.webp", 
        "yoshi.webp", 
        "wario.webp", 
        "kingBoo.webp", 
        "toadAzul.webp", 
        "lakitu.webp", 
        "peach.webp", 
        "estrella.webp", 
        "waluigi.webp", 
        "toad.webp", 
        "planta.webp", 
        "donkeyKong.webp", 
        "kameka.webp", 
        "daisy.webp"
    ],

    NOMBRES: ["Mario", "Luigi", "Yoshi", "Wario", "King Boo", "Toad azul", "Lakitu", "Peach", "Estrella dorada", "Waluigi", "Toad", "Planta", "Donkey Kong", "Kameka", "Daisy"],

    // Monedas que aparecen en cada tanda
    CANTIDAD_MONEDAS: 8,
    // De las monedas de cada tanda, cuántas son malditas (quitan una vida)
    CANTIDAD_MALDITAS: 3,

    // Duración (ms) de la transición al avanzar o retroceder
    VELOCIDAD: 800,

    // Precipicios
    CANTIDAD_PRECIPICIOS: 3,
    PRECIPICIO_ANCHO_MIN: 110,
    PRECIPICIO_ANCHO_MAX: 170,
    PRECIPICIO_INICIO_SEGURO: 250, // no aparecen cerca de la posición inicial de Mario
    PRECIPICIO_MARGEN_FINAL: 80, // suelo firme al final del escenario
    PRECIPICIO_SEPARACION: 180, // distancia mínima entre dos precipicios
    DURACION_CAIDA: 700,

    // Vidas con las que empieza cada personaje
    VIDAS_INICIALES: 3,
};
