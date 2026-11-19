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

function cuadradoYCubo() {
    let n1 = parseFloat(prompt("Indique el número para averiguar su cuadrado y su cubo"));
    let cuadrado,
        cubo = 0;
    let message = "";

    cuadrado = n1 ** 2;
    cubo = n1 ** 3;
    message = "El cuadrado de " + n1 + " es " + cuadrado + ".\n";
    message += "Y el cubo de " + n1 + " es " + cubo + ". ";

    alert(message);
}

function calcularPotencia() {
    let base = parseFloat(prompt("Indique la base"));
    let exponente = parseInt(prompt("Indique el exponente deseado"));
    let potencia = "";
    let message = "";

    potencia = base ** exponente;

    message = "La potencia de " + base + " elevado a " + exponente + " es: " + potencia;

    alert(message);
}

function mediaAritmeticaDeTres() {
    let n1 = parseFloat(prompt("Introduzca el primer número"));
    let n2 = parseFloat(prompt("Introduzca el segundo número"));
    let n3 = parseFloat(prompt("Introduzca el tercer número"));
    let media = "";
    let message = "";

    media = (n1 + n2 + n3) / 3;
    message = "La media aritmética de " + n1 + ", " + n2 + " y " + n3 + " es: " + media;
    alert(message);
}

function mediaArtitmeticaDeCualquierNumero() {
    let divisor = parseFloat(prompt("Introduzca el divisor de la media aritmética"));

    let suma = 0;
    let num = 0;
    let resultado = 0;

    let message = "La media artimética de ";
    let contador = 1;

    while (contador <= divisor) {
        num = parseFloat(prompt("Introduzca el número " + contador + " de la serie para hallar la media aritmética"));

        if (contador < divisor) {
            message += num + " y ";
        } else {
            message += num;
        }
        suma += num;
        contador++;
    }

    resultado = suma / divisor;
    message += " es " + resultado;

    alert(message);
}

function areaRectangulo() {
    let base = parseFloat(prompt("Indique la base de su rectángulo en cm"));
    let altura = parseFloat(prompt("Indique la altura de su rectángulo en cm"));
    let area = base * altura;
    let message = "";

    message = "El área del rectágulo es de " + area;
    message += " cm2";
    alert(message);
}

function areaYLongitudCircunferencia() {
    let radio = parseFloat(prompt("Indique el radio conocido de la circunferencia"));
    let area = Math.PI * radio ** 2;
    let longitud = 2 * Math.PI * radio;
    let message = "";

    message = "El área de la circunferencia es de " + area;
    message += " y la longitud de la circunferencia es de " + longitud;

    alert(message);
}

function celsiusAFharenheit() {
    let celsius = parseFloat(prompt("Indique los grados celsius que quiere convertir a Fahrenheit"));
    let fahrenheit = (9 / 5) * celsius + 32;
    let message = "";

    message = celsius + " grados Celsius, es equivalente a ";
    message += fahrenheit + " grados Faherenheit";

    alert(message);
}

function calcularPorcentaje() {
    let n1 = parseFloat(prompt("Indique el porcentaje a hayar"));
    let n2 = parseFloat(prompt("Indique el total sobre el que calcular el porcentaje"));
    let message = "";
    let porcentaje = (n1 * 100) / n2;

    message = "El " + n1;
    message += "% de " + n2;
    message += " es " + porcentaje;

    alert(message);
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
//               IF, ELSE Y ELSE IF
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

    if (nota >= 0 && nota < 5) {
        alert("Con un " + nota + " Bart está suspenso!!");
    } else if (nota >= 5 && nota < 7) {
        alert("Con un " + nota + " Bart tiene un aprobado!!");
    } else if (nota >= 7 && nota < 9) {
        alert("Con un " + nota + " Bart tiene un notable!!");
    } else if (nota >= 9 && nota < 10) {
        alert("Con un " + nota + " Bart tiene un sobresaliente!!");
    } else if (nota === 10) {
        alert("Con un " + nota + " Bart tiene una matricula de honor!!  FELICIDADES");
    } else {
        alert("Introduzca una nota válida entre 0 y 10");
        clasificarNotasBart();
    }
}

// ------------------------------------------------
//                    SWITCH
// ------------------------------------------------

function clasificarNotasSwitch() {
    let n = parseFloat(prompt("Indique la nota del exámen:"));

    switch (true) {
        case n >= 0 && n < 5:
            console.log("El alumno está 'Suspenso'");
            break;
        case n >= 5 && n < 7:
            console.log("El alumno está 'Aprobado'");
            break;
        case n >= 7 && n < 9:
            console.log("El alumno ha sacado un 'Notable'");
            break;
        case n >= 9 && n < 10:
            console.log("El alumno ha sacado un 'Sobresaliente'");
            break;
        case n === 10:
            console.log("El alumno ha obtenido 'Matrícula de honor'");
            break;
        default:
            alert(" Esa no es una nota válida, seleccione una nota entre 0 y 10");
            clasificarNotasSwitch();
    }
}

function elegirCastigo() {
    let n = 0;

    let seleccion = "Ha seleccionado: ";
    let uno = "'Limpiar Pizarra'";
    let dos = "'Recoger el Patio'";
    let tres = "'Ordenar la biblioteca'";
    let cuatro = "'Escribir 100 frases'";
    let error = "";
    let contador = 0;

    while (n < 1 || n > 4) {
        if (contador > 0) {
            alert("Escoja una opción de castigo válida de la lista");
        }
        n = parseInt(prompt("Seleccione el castigo a cumplir:\n" + "1. Limpiar pizarra\n" + "2. Recoger el patio\n" + "3. Ordenar la biblioteca\n" + "4. Escribir 100 frases"));
        contador++;
    }

    switch (n) {
        case 1:
            console.log(seleccion + uno);
            break;
        case 2:
            console.log(seleccion + dos);
            break;
        case 3:
            console.log(seleccion + tres);
            break;
        case 4:
            console.log(seleccion + cuatro);
            break;
        default:
            error = "No deberías haber llegado aquí, error en programación";
            console.log(error);
    }
}

// ------------------------------------------------
//            CALCULADORA MEJORADA
// ------------------------------------------------

function seleccionarCalculos() {
    let menu = parseInt(prompt("Seleccione una opción:\n" + "1. Sumar \n" + "2. Restar \n" + "3. Multiplicar \n" + "4. Dividir \n" + "5. Salir"));
    let fin = "Actualice para empezar de nuevo";
    let salir = "Ha seleccionado SALIR";
    let error = "OPCIÓN NO VÁLIDA!!!";

    switch (menu) {
        case 1:
            sumarDosNumeros();
            break;
        case 2:
            restarDosNumeros();
            break;
        case 3:
            multiplicarDosNumeros();
            break;
        case 4:
            dividirDosNumeros();
            break;
        case 5:
            console.log(salir);
            break;
        default:
            console.log(error);
    }
    console.log(fin);
}

// ------------------------------------------------
//             SUMA DE GAUSS
// ------------------------------------------------

function sumarGauss() {}

// ------------------------------------------------
//             EJERCICIOS EXTRAS
// ------------------------------------------------
// 1.- Solicita al usuario tres números enteros e indícale cuál es el menor.
// ------------------------------------------------
function identificarMayor() {
    let n1 = parseInt(prompt("Inserte el primero de tres números enteros"));
    let n2 = parseInt(prompt("Inserte el segundo de tres números enteros"));
    let n3 = parseInt(prompt("Inserte el tercero de tres números enteros"));
    let mayor = " es el mayor número entre: ";

    switch (true) {
        case n1 > n2 || n1 > n3:
            alert(n1 + mayor + n1 + ", " + n2 + " y " + n3);
            break;
        case n2 > n1 || n2 > n3:
            alert(n2 + mayor + n1 + ", " + n2 + " y " + n3);
            break;
        default:
            alert(n3 + mayor + n1 + ", " + n2 + " y " + n3);
    }
}

//------------------------------------------
// Llamar a las funciones (SIEMPRE)
// -----------------------------------------

// sumarDosNumeros();
// restarDosNumeros();
// multiplicarDosNumeros();
// dividirDosNumeros();
// cuadradoYCubo();
// calcularPotencia();
// mediaAritmeticaDeTres();
// mediaArtitmeticaDeCualquierNumero();
// areaRectangulo();
// areaYLongitudCircunferencia();
// celsiusAFharenheit();
// calcularPorcentaje();
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
// clasificarNotasBart();
// clasificarNotasSwitch();
// elegirCastigo();
// seleccionarCalculos();
// identificarMayor();
