//Ejercicio1

function filterNumbersGreaterThan(lista) {
    let filtrar = lista.filter((lista) => lista <= 7);
    return filtrar;
}

//Ejercicio2

function toHackerSpeak(frase) {
    let result = "";
    for (let index = 0; index < frase.length; index++) {
         let contenido = frase[index];

         switch (contenido) {
            case "a":
            case "A":
                result += "4";
                break;
            case "e":
            case "E":
                result += "3";
                break;
            case "i":
            case "I":
                result += "1";
                break;
            case "o":
            case "O":
                result += "0";
                break;
            case "s":
            case "S":
                result += "5";
                break;
         
            default:
                result += contenido;
                break;
         }
        
    }
    
    return result;
}

//Ejercicio3 

function getFileExtension(documento) {
    let encontrar = documento.lastIndexOf(".");
    let cortar = documento.slice(encontrar + 1);
    return cortar;
}


//Ejercicio4

function flatArray(miArray2D) {
    let lista = [];

    let juntar = miArray2D.join();
    let separar = juntar.split(",");
    lista.push(...separar);
    
    return lista;
}

//Ejercicio5

function nameremoveDuplicatese(lista) {
    return [...new Set(lista)];
}

//Ejercicio6

function countLetter(frase, letra) {
    contador = 0;
    for (let index = 0; index < frase.length; index++) {
                if (frase[index] === letra) {
                    contador++;
                }
    }
    
    return contador;
    
}

// Ejercicio7
function removeWords(str, words) {
    let palabras = str.split(" ");
    let listaLimplia = [];

    for (let i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];
        let seDebeEliminar = false;

        for (let j = 0; j < words.length; j++) {
            if (palabraActual === words[j]) {
                seDebeEliminar = true;
                break; 
            }
        }

        if (seDebeEliminar === false) {
            listaLimplia.push(palabraActual);
        }
    }

    return listaLimplia.join(" ");
}