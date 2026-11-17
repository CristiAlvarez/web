"use strict";

// ------------------------------------------------
//             OPERACIONES MATEMÁTICAS
// ------------------------------------------------

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

// ------------------------------------------------
//             LLAMADA DE FUNCIONES
// ------------------------------------------------

function seleccionaUnaOperacion() {
    let operacion = parseInt(prompt("Seleccione una operación : 1. Suma, 2. Resta, 3. Multiplicación o 4. División"));

    if (operacion === 1) {
        alert("Ha seleccionado SUMA");
        sumarDosNumeros();
    } else if (operacion === 2) {
        alert("Ha seleccionado RESTA");
        restarDosNumeros();
    } else if (operacion === 3) {
        alert("Ha seleccionado MULTIPLICACIÓN");
        multiplicarDosNumeros();
    } else if (operacion === 4) {
        alert("Ha seleccionado DIVISIÓN");
        dividirDosNumeros();
    } else {
        alert("Seleccione una opción válida");
        seleccionaUnaOperacion();
    }
}

// ------------------------------------------------
//          BUCLES FOR, WHILE Y DO WHILE
// ------------------------------------------------

// --------------Usando bucle "for"----------------
function tirarPetardos() {
    let vueltas = parseInt(prompt("Escoja número de repeticiones"));

    for (let i = 1; i <= vueltas; i++) {
        console.log(i, "No volveré a tirar petardos en el colegio");
    }
}

function tirarPetardos2() {
    let nombre = prompt("Cómo se llama el alumno?");
    let vueltas = parseInt(prompt("Escoja número de repeticiones"));
    let frase = prompt("Qué debe escribir??");
    let message = "";

    console.log(nombre, "está castigado y escribe.");

    for (let i = 0; i < vueltas; i++) {
        //-----Guarda texto de console en una variable-----
        message = i + 1 + ". "; //La cadena empieza en 1 en lugar de 0
        message += frase; //Esto es igual a message = message + frase

        console.log(message);
    }
}

// ---------------- Usando bucle "while" ----------------

function tirarPetardos3() {
    let vueltas = parseInt(prompt("Escoja número de repeticiones"));
    let frase = prompt("Qué debe escribir??");
    let message = "";

    let i = 1;
    while (i <= vueltas) {
        message = i + ".- ";
        message += frase;

        console.log(message);

        i++; // Esto es igual a i = i + 1 e igual a i += 1
    }
}

// ---------------- Usando bucle "do while" ----------------

function tirarPetardos4() {
    let vueltas = parseInt(prompt("Escoja número de repeticiones"));
    let frase = prompt("Qué debe escribir??");
    let message = "";

    let i = 1;
    do {
        message = i + ": ";
        message += frase;

        console.log(message);
        i++;
    } while (i <= vueltas);
}

// ---------------- Tabla de multiplicar ----------------

function hacerTablaDeMultiplicar() {
    let n = parseInt(prompt("Qué tabla de multiplicar quiere ver??"));
    let message = "";

    console.log("Tabla del " + n);
    console.log("------------");

    for (let i = 1; i <= 10; i++) {
        let multi = n * i;
        message = n + " x " + i + " = ";
        message += multi;

        console.log(message);
    }
}

// ---------------- Pares e impares ----------------

function mostrarPares() {
    let n = parseInt(prompt("Hasta qué número quieres ver los pares?"));
    let message = "";

    console.log("Números pares del 0 hasta el " + n);
    console.log("=================================");

    for (let i = 0; i <= n; i += 2) {
        message += i + ", ";
    }
    console.log(message);
}

function mostrarImpares() {
    let n = parseInt(prompt("Hasta qué número quieres ver los impares?"));
    let message = "";

    console.log("Números impares desde el 1 hasta el " + n);
    console.log("=================================");

    for (let i = 1; i <= n; i += 2) {
        message += i + ", ";
    }
    console.log(message);
}

function mostrarNumerosDeCincoEnCinco() {
    let n = parseInt(prompt("Hasta qué número quieres ver los multiplos de 5?"));
    let message = "";

    console.log("Múltiplos de 5 hasta " + n);
    console.log("=================================");

    for (let i = 0; i <= n; i += 5) {
        message += i + ", ";
    }
    console.log(message);
}

// ------------------------------------------------
//          IF, ELSE Y ELSE IF
// ------------------------------------------------

function verAprobadoBart() {
    let corte = parseFloat(prompt("Defina nota de corte:"));
    let nota = parseFloat(prompt("Qué nota tiene Bart en el exámen?"));

    if (nota >= corte) {
        alert("¡Bart ha aprobado!");
    }
}

function entrarEnElColegio() {
    let min = parseInt(prompt("Defina edad mínima de acceso:"));
    let edad = parseInt(prompt("Qué edad tiene Bart?"));

    if (edad >= min) {
        alert("Bart puede entrar en el colegio!!!!");
    } else {
        alert("Bart debe esperar a cumplir los 12 años. :(");
    }
}

function clasificarNotasBart() {
    let nota = parseFloat(prompt("Indique la nota del examen (Valores entre 0 y 10)"));

    if (nota <= 4) {
        alert("Con un " + nota + " Bart está suspenso!! ");
    } else if (nota <= 6) {
        alert("Con un " + nota + " Bart tiene un aprobado!! ");
    } else if (nota <= 8) {
        alert("Con un " + nota + " Bart tiene un notable!! ");
    } else if (nota < 10) {
        alert("Con un " + nota + " Bart tiene un sobresaliente!! ");
    } else {
        alert("Con un " + nota + " Bart tiene una matricula de honor!!  FELICIDADES");
    }

    // if (nota === 10) {
    //     alert("Con un " + nota + " Bart tiene una matricula de honor!!  FELICIDADES");
    // } else if (nota === 9) {
    //     alert("Con un " + nota + " Bart tiene un sobresaliente!! ");
    // } else if (nota >= 7) {
    //     alert("Con un " + nota + " Bart tiene un notable!! ");
    // } else if (nota >= 5) {
    //     alert("Con un " + nota + " Bart tiene un aprobado!! ");
    // } else {
    //     alert("Con un " + nota + " Bart está suspenso!! ");
    // }
}

//------------------------------------------
// Llamar a las funciones (SIEMPRE)
// -----------------------------------------

// sumarDosNumeros();
// restarDosNumeros();
// multiplicarDosNumeros();
// dividirDosNumeros();
// seleccionaUnaOperacion();
// tirarPetardos();
// tirarPetardos2();
// tirarPetardos3();
// tirarPetardos4();
// hacerTablaDeMultiplicar();
// mostrarPares();
// mostrarImpares();
// mostrarNumerosDeCincoEnCinco();
// verAprobadoBart();
// entrarEnElColegio();
clasificarNotasBart();
