"use strict";

//-----------------------------------------------
//               MI PRIMER ARRAY
//-----------------------------------------------

function crearListaColores() {
    let colores = [];

    // Crea el array
    colores = ["rojo", " verde", " azul"];

    // Muestra el primer color del array
    console.log("Primer color: " + colores[0]);

    // Muestra el último color del array
    console.log("Último color: " + colores[colores.length - 1]);

    // Muestra longitud del array
    console.log("Largo del array: " + colores.length);

    // Cambia verde por amarillo en el array
    colores[1] = " amarillo";

    // Muestra array
    console.log("Array completo: " + colores);
}

// crearListaColores();

//-----------------------------------------------
//               CREAR LISTA
//-----------------------------------------------

function hacerListaCompra() {
    let lista = [];
    lista = [" Leche", " Pan", " Huevos"];

    console.log("Lista de la compra:\n" + lista);

    return lista;
}

// hacerListaCompra();

//-----------------------------------------------
//               ACCEDER A ELEMENTO
//-----------------------------------------------

function accederElemento() {
    let comidas = [];
    comidas = ["Pizza", "Hamburguesa", "Paella"];

    console.log("Quiero comer " + comidas[1]);
}
// accederElemento();

//-----------------------------------------------
//                 CONTAR ARRAY
//-----------------------------------------------

function contarMascotas() {
    let mascotas = [];
    mascotas = ["Periquitos", "Perro", "Gato", "Hámster"];

    console.log("Tengo un total de " + mascotas.length + " mascotas.");
}

// contarMascotas();

//-----------------------------------------------
//               AÑADIR ELEMENTOS
//-----------------------------------------------

function agregarProducto() {
    let lista = hacerListaCompra();

    lista.push(" Manzanas");

    console.log("Lista de la compra actualizada:\n" + lista);
}

// agregarProducto();

//-----------------------------------------------
//               ELIMINAR ELEMENTOS
//-----------------------------------------------

function eliminarTarea() {
    let tareas = [];
    tareas = [" Estudiar", " Comprar pan", " Hacer testamento"];

    tareas.pop();
    console.log("Tareas pendientes: " + tareas);
    console.log(tareas);
}
// eliminarTarea();

//-----------------------------------------------
//               MOSTRAR ELEMENTOS
//-----------------------------------------------

function mostrarElementos() {
    let series = ["Dark", "Breaking Bad", "Stranger Things", "Los Soprano", "Juego de tronos"];
    let message = "Mis series favoritas son: ";

    for (let i = 0; i < series.length; i++) {
        if (i === series.length - 2) {
            message += series[i] + " y ";
        } else if (i === series.length - 1) {
            message += series[i];
        } else {
            message += series[i] + ", ";
        }
    }

    console.log(message);
}

// mostrarElementos();

//-----------------------------------------------
//               BUSCAR UN ELEMENTO
//-----------------------------------------------

function buscarElemento() {
    let amigos = ["Carlos", "Lucía", "María"];
    let nombreABuscar = "María";
    let resultado = 0;

    resultado = amigos.includes(nombreABuscar);

    console.log("Está '" + nombreABuscar + "' en la lista de amigos? " + resultado);
}

// buscarElemento();

//-----------------------------------------------
//               MOSTRAR MENÚ MIÉRCOLES
//-----------------------------------------------

function escogerMenuSemana() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    let menu = ["hamburguesa", "chuletón", "lasagna", "sopa", "pizza"];

    console.log("Si hoy es " + dias[2] + ", toca comer " + menu[2]);
}

// escogerMenuSemana();

//-----------------------------------------------
//               SUMAR GASTOS
//-----------------------------------------------

function sumarGastos() {
    let gastos = [25, 40, 15, 20];
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i];

        console.log("Parcial gastos: ");
        console.log(total);
    }

    console.log("Total gastos: ");
    console.log(total);
}

// sumarGastos();

//-----------------------------------------------
//              AGENDA DE CONTACTOS
//-----------------------------------------------

function mostrarAgendaContactos() {
    let agenda = ["Pinto", "Cristian", "Leo", "Senén", "Dani", "Yonolis"];

    for (let i = 0; i < agenda.length; i++) {
        console.log(i + 1 + ". " + agenda[i]);
    }
}

// mostrarAgendaContactos();
