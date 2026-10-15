//Ejercicio1

function numerosmaximo(num1,num2,num3,num4) {
    return Math.max(num1,num2,num3,num4);
}

//Ejercicio2
//Ejercicio3

function lanzamiento() {
    return Math.floor((Math.random() * 6) + 1);
}

//Ejercicio4

function volumen(radio) {
    let vol = (4/3 * Math.PI * Math.pow(radio, 3)).toFixed(2);
    let area = (Math.PI * Math.pow(radio, 2)).toFixed(2);
    return vol, area;
}

//Ejercicio5
function voluAre(radio) {
    let vol = (4/3 * Math.PI * Math.pow(radio, 3)).toFixed(2);
    let area = (Math.PI * Math.pow(radio, 2)).toFixed(2);
    let resultado = `El volumen de está esfera es de ${vol} y la area de un círculo es ${area}`;
    document.write(resultado);
    return resultado;
}

//Ejercicio6

function potencia(num1, pot) {
       if (pot == 0) {
                return 1;
       }
        return num1 * potencia(num1, pot - 1);
}

//Ejercicio7

function factorial(num1) {
       if ( num1 == 0 || num1 == 1) {
                return 1;
       }
        return num1 * factorial(num1 - 1);
}

