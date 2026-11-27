// ===================================
// CONFIGURACIÓN
// Todos los "números mágicos" y listas de datos en un único sitio.
// Si hay que cambiar algo del juego, se cambia aquí.
// ===================================

export const CONFIG = {
    // Carpeta de las imágenes (relativa al HTML)
    RUTA_IMG: "../../img/superMario/",

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

    // Duración (ms) de la transición al avanzar o retroceder
    VELOCIDAD: 800,
};
