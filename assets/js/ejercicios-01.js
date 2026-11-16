"use strict";

function sumarDosNumeros() {
    let n1 = parseFloat(prompt("Escribe el primer sumando"));
    let n2 = parseFloat(prompt("Escribe el segundo sumando"));

    let suma = n1 + n2;

    alert("El resultado de la suma de " + n1 + " y " + n2 + " es " + suma);
}

function restarDosNumeros() {
    let n1 = parseFloat(prompt("Escribe el primer minuendo"));
    let n2 = parseFloat(prompt("Escribe el segundo sustraendo"));

    let resta = n1 - n2;

    alert("El resultado de la resta de " + n1 + " menos " + n2 + " es " + resta);
}

function multiplicarDosNumeros() {
    let n1 = parseFloat(prompt("Escribe el multiplicando"));
    let n2 = parseFloat(prompt("Escribe el multiplicador"));

    let multi = n1 * n2;

    alert("El resultado de multiplicar " + n1 + " por " + n2 + " es: " + multi);
}

function dividirDosNumeros() {
    let n1 = parseFloat(prompt("Escribe el dividendo"));
    let n2 = parseFloat(prompt("Escribe el divisor"));

    while (n2 === 0) {
        alert("EL DIVISOR NO PUEDE SER 0 !!! ");
        n2 = parseFloat(prompt("Escribe un divisor diferente de 0"));
    }
    let resultado = n1 / n2;
    alert("El resultado de dividir " + n1 + " entre " + n2 + " es: " + resultado);
}

function seleccionaUnaOperacion() {
    let operacion = parseInt(prompt("Seleccione una operación : 1. Suma, 2. Resta, 3. Multiplicación o 4. División"));

    if (operacion === 1) {
        alert("Ha seleccionado suma");
        sumarDosNumeros();
    } else if (operacion === 2) {
        alert("Ha seleccionado resta");
        restarDosNumeros();
    } else if (operacion === 3) {
        alert("Ha seleccionado multiplicación");
        multiplicarDosNumeros();
    } else if (operacion === 4) {
        alert("Ha seleccionado división");
        dividirDosNumeros();
    } else {
        alert("Seleccione una opción válida");
        seleccionaUnaOperacion();
    }
}

// Llamar a las funciones (SIEMPRE)
// sumarDosNumeros();
// restarDosNumeros();
// multiplicarDosNumeros();
// dividirDosNumeros();
seleccionaUnaOperacion();
