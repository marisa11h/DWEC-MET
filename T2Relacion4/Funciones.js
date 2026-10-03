//Ejercicio1
//Apartado A
function cadenaalreves(cad_arg) {
    let cad_argreves = "";
    for (let index = cad_arg.length -1; index >= 0; index--) {
            cad_argreves += cad_arg[index];
    }
    document.write(`La frase al reves de está frase "${cad_arg}" es ${cad_argreves} <br>`);
}
//Apartado B
function palabrasalreves(cad_arg) {
    let pa_argreves = "".split("").join("");
    for (let index = cad_arg.length -1; index >= 0; index--) {
            pa_argreves += cad_arg[index];
    }
    document.write(`La palabras al reves de está frase "${cad_arg}" es ${pa_argreves}<br>`);
}
//Apartado C
function palabramaslarga(cad_arg) {
    let palabras = cad_arg.split(" ");
    let longitudmaxima = 0
   for (let index = 0; index < palabras.length; index++) {
        if (palabras[index].length > longitudmaxima) {
            longitudmaxima = palabras[index].length;
            
        }
        
   }
    document.write(`La longitud máxima de la palabra más larga de "${cad_arg}" es ${longitudmaxima}<br>`);
}
//Apartado D
function palabramaslargaquei(cad_arg, i) {
    let palabras = cad_arg.split(" ");
    let resultado = 0;
   for (let index = 0; index < palabras.length; index++) {
        if (palabras[index].length > i) {
            resultado++;  
        }
        
   }
    document.write(`Las palabras mayores que i de "${cad_arg}" es ${resultado}<br>`);
}
//Apartado E
function formateo(cad_arg) {
    let resultados = cad_arg.slice(0, 1).toUpperCase().concat(cad_arg.slice(1, cad_arg.length).toLowerCase());
    document.write(`El resultado de poner la primera mayuscula y las demás minúsculas es ${resultados}`);
    }

//Ejercicio2
function informacioncadena(cadena) {
         
            if (cadena === cadena.toUpperCase()) {
                document.write(`La frase "${cadena}" está formada por solo Mayusculas`);
            }else if (cadena === cadena.toLowerCase()) {
                document.write(`La frase "${cadena}" está formada por solo Minúsculas`);
            } else {
                document.write(`La frase "${cadena}" está formada por Mayúsculas y Minúsculas`);
            }
    }

//Ejercicio3
function subcadena(cadenita) {
        let subcadenitas = prompt("Dime subcadena de está: "); 
         contador = 0;
          for (let index = 0; index < cadenita.length; index++) {
            if (cadenita.indexOf(subcadenitas, index) === index) {
                contador++
            }
            
          }

          document.write(`Las veces que aparece una subcadena en está cadena son ${contador}`);
    }

//Ejercicio4

function vocalesconsonantes(cadenas){
     const vocales = ["a", "e", "i", "o", "u"];
     const consonantes = ["b", "c", "d", "f", "g", "h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
     let solovocales = "";
     let soloconsonantes = "";

     for (let index = 0; index < cadenas.length; index++) {
        if (vocales.includes(cadenas[index].toLowerCase())) {
            solovocales += cadenas[index];
        } else if(consonantes.includes(cadenas[index].toLowerCase())){
            soloconsonantes += cadenas[index];
        }

        
        }
        document.write(`${soloconsonantes.concat(solovocales)}`);
}

//Ejercicio5

function borrarpalabrasrepetidas(fracesita) {
    palabrasrepetidas = "";
    for (let index = 0; index < fracesita.length; index++) {
            if (!palabrasrepetidas.includes(fracesita[index])) {
                palabrasrepetidas += fracesita[index];
            }        
    }

    document.write(`La frase es "${fracesita}" y sin caracteres repetidos es "${palabrasrepetidas}"`);
}

//Ejercicio6

function subcadenadeotra(cad, cad2) {
    let posicion = cad.indexOf(cad2);
    
    if (posicion !== -1) {
        document.write(`La frase es "${cad}" y la otra frase es "${cad2}" y la posición donde está la segunda dentro de la primera es ${posicion}`);
    } else{
        document.write(`La segunda no es subcadena de la primera`);
    }
    
}

//Ejercicio7

function palindromo(cade) {
    let reves = "";
    for (let index = cade.length -1; index >= 0; index--) {
            reves += cade[index];
    }

     if (reves.toLowerCase().replaceAll(" ", "") === cade.toLowerCase().replaceAll(" ", "")) {
                document.write("Estás frases son polindromas");
            }else{
                document.write("No son polindromas");
            }
}

//Ejercicio8

function contar(cadenita) {
    cadenita = cadenita.trim();
    let contador = 1
    for (let index = 0; index < cadenita.length; index++) {
        if (cadenita[index] === " " && cadenita[index -1] !== " ") {
            contador++
        }
    }

     document.write(`En esta cadena el número de palabras es ${contador}`);
}

//Ejercicio9

function validateCreditCard(tarjeta) {
    if (tarjeta.length !== 16 || isNaN(tarjeta)) {
        return false;
    }

    let suma = 0;
    let todosIguales = true;
    let primerDigito = tarjeta[0]; 

   
    for (let index = 0; index < tarjeta.length; index++) {
        let digito = parseInt(tarjeta[index]);
        suma += digito;

        if (tarjeta[index] !== primerDigito) {
            todosIguales = false;
        }
    }

    let ultimoDigito = parseInt(tarjeta[15]);
    let esUltimoPar = (ultimoDigito % 2 === 0);

    if (suma > 16 && todosIguales === false && esUltimoPar === true) {
        return true;  
    } else {
        return false; 
    }
}

//Ejercicio10

function validateCreditCard2(tarjetaConGuiones) {
    let tarjeta = tarjetaConGuiones.replaceAll("-", "");

    if (tarjeta.length !== 16 || isNaN(tarjeta)) {
        return false;
    }

    let suma = 0;
    let todosIguales = true;
    let primerDigito = tarjeta[0];

    for (let index = 0; index < tarjeta.length; index++) {
        let digito = parseInt(tarjeta[index]);

        suma += digito;

        if (tarjeta[index] !== primerDigito) {
            todosIguales = false;
        }
    }

    let ultimoDigito = parseInt(tarjeta[15]);
    let esUltimoPar = (ultimoDigito % 2 === 0);


    if (suma > 16 && todosIguales === false && esUltimoPar === true) {
        return true;  
    } else {
        return false; 
    }
}



