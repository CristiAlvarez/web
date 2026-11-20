"use strict";

function verCalculadoraInfinita() {
    let fin = "GRACIAS !!\nActualice para reiniciar la calculadora(F5)";
    let menu = 99;
    let n1 = 0;
    let n2 = 0;
    let message = "";
    let continuar = 0;

    while (menu < 0 || menu > 11) {
        menu = parseInt(prompt("Seleccione una opción:\n" + "1. Sumar \n" + "2. Restar \n" + "3. Multiplicar \n" + "4. Dividir \n" + "5. Cuadrado y cubo \n" + "6. Potencia\n" + "7. Area de rectángulo \n" + "8. Area y longitud de circunferencia \n" + "9. Celsius vs Fahrenheit \n" + "10. Porcentaje\n" + "11. Suma de Gauss\n" + "0. Salir"));

        if (menu < 0 || menu > 11) {
            alert("OPCIÓN NO VÁLIDA!!!");
        }
    }

    if (menu > 0) {
        n1 = parseFloat(prompt("Escribe el primer número"));
        n2 = parseFloat(prompt("Escribe el segundo número"));
    }

    switch (menu) {
        case 1:
            let suma = sumarDosNumerosParametros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es: " + suma;
            break;
        case 2:
            let diferencia = restarDosNumerosParametros(n1, n2);
            message = "La diferencia de " + n1 + " - " + n2 + " es: " + diferencia;
            break;
        case 3:
            let producto = multiplicarDosNumerosParametros(n1, n2);
            message = "El producto de " + n1 + " por " + n2 + " es: " + producto;
            break;
        case 4:
            while (n2 === 0) {
                alert("EL DIVISOR NO PUEDE SER 0 !!! ");
                n2 = parseFloat(prompt("Escribe un divisor diferente de 0"));
            }
            let resto = dividirDosNumerosParametros(n1, n2);
            message = "El resultado de dividir " + n1 + " entre " + n2 + " es: " + resto;
            break;

        case 5:
            let cuadrado = calcularCuadradoYCubo(n1).cuadrado;
            let cubo = calcularCuadradoYCubo(n1).cubo;

            message = "El cuadrado de " + n1 + " es " + cuadrado + ".\nY el cubo de " + n1 + " es " + cubo;
            break;

        case 6:
            let potencia = calcularPotencia(n1, n2);
            message = "La potencia de " + n1 + " elevado a " + n2 + " es: " + potencia;
            break;

        case 7:
            let area = calcularAreaRectangulo(n1, n2);
            message = "El área del rectágulo es de " + area + " cm2";
            break;

        case 8:
            let areaC = calcularAreaYLongitudCircunferencia(n1).areaC;
            let longitud = calcularAreaYLongitudCircunferencia(n1).longitud;
            message = "El área de la circunferencia es de " + areaC + " y la longitud de la circunferencia es de " + longitud;
            break;

        case 9:
            let fahrenheit = convertirCelsiusAFharenheit(n1);
            message = n1 + " grados Celsius, es equivalente a " + fahrenheit + " grados Faherenheit";
            break;
        case 10:
            let porcentaje = calcularPorcentaje(n1, n2);
            message = "El " + n1 + "% de " + n2 + " es " + porcentaje;
            break;

        case 11:
            let gauss = sumarGaussFormula(n1);
            message = "Al finalizar el desafío de " + n1 + " días " + " habrá realizado un total de " + gauss + " flexiones.\n";
            break;

        default:
            message = "Ha seleccionado SALIR";
    }
    console.log(message);

    continuar = parseInt(prompt("GRACIAS !! \n¿Quiere realizar otra operación? \n[1. SI]\n[0. NO]"));

    if (continuar === 1) {
        verCalculadoraInfinita();
    }
    console.log(fin);
}

verCalculadoraInfinita();

function sumarDosNumerosParametros(n1, n2) {
    let suma = n1 + n2;
    return suma;
}
function restarDosNumerosParametros(n1, n2) {
    let diferencia = n1 - n2;
    return diferencia;
}
function multiplicarDosNumerosParametros(n1, n2) {
    let producto = n1 * n2;
    return producto;
}
function dividirDosNumerosParametros(n1, n2) {
    let resto = n1 / n2;
    return resto;
}
function calcularCuadradoYCubo(n1) {
    let cuadrado = n1 ** 2;
    let cubo = n1 ** 3;

    return { cuadrado, cubo };
}
function calcularPotencia(base, exponente) {
    let potencia = base ** exponente;
    return potencia;
}
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;

    return area;
}
function calcularAreaYLongitudCircunferencia(radio) {
    let areaC = Math.PI * radio ** 2;
    let longitud = 2 * Math.PI * radio;

    return { areaC, longitud };
}
function convertirCelsiusAFharenheit(celsius) {
    let fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;
}
function calcularPorcentaje(n1, n2) {
    let porcentaje = (n1 * 100) / n2;

    return porcentaje;
}
function sumarGaussFormula(dias) {
    let gauss = (dias * (dias + 1)) / 2;
    return gauss;
}
