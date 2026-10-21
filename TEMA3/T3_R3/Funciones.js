//Ejercicio2
function obtenerNota(indiceEstudiante, trimestre = null) {
    // Validación básica de que el estudiante exista en el array
    if (!clase[indiceEstudiante]) {
        return "Estudiante no encontrado";
    }

    // Separar el string por comas y limpiar espacios en blanco
    const datos = clase[indiceEstudiante].split(',').map(item => item.trim());
    

    let nombre = datos[0];
    let nota1 = parseFloat(datos[2]);
    let nota2 = parseFloat(datos[3]);
    let nota3 = parseFloat(datos[4]);

    
    if (trimestre === null) {
        const media = (nota1 + nota2 + nota3) / 3;
        return `La nota media de ${nombre} es: ${media.toFixed(2)}`;
    }

    if (trimestre === 1) return `La nota de ${nombre} en el 1er trimestre es: ${nota1}`;
    if (trimestre === 2) return `La nota de ${nombre} en el 2do trimestre es: ${nota2}`;
    if (trimestre === 3) return `La nota de ${nombre} en el 3er trimestre es: ${nota3}`;
    
    return "Trimestre no válido (Debe ser 1, 2 o 3)";
}


//Ejercicio3


function edadMediaClase() {
    let sumaEdades = 0;


    for (let i = 0; i < clase.length; i++) {
        const datos = clase[i].split(',').map(item => item.trim());
        
        const edad = parseInt(datos[1]);
        
        sumaEdades = sumaEdades + edad;
    }

    const resultadoMedia = sumaEdades / clase.length;

    return `La edad media de la clase es: ${resultadoMedia.toFixed(2)} años.`;

 


}

// Ejercicio 4
function estudianteAlazar() {
    // Genera un índice aleatorio válido para el array 'clase'
    let indiceAleatorio = Math.floor(Math.random() * clase.length);
    
    // Rompemos el string para sacar solo el nombre
    let datos = clase[indiceAleatorio].split(',');
    let nombre = datos[0].trim();
    
    return `El estudiante elegido al azar es: ${nombre}`;
}

// Ejercicio 5
function paresImpares() {
    let numeros = [];
    
    
    for (let i = 0; i < 100; i++) {
        let aleatorio = Math.floor(Math.random() * 1000) + 1;
        numeros.push(aleatorio);
    }
    
    console.log("Array original:", numeros);
    
   
    let pares = [];
    let impares = [];
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]); 
        } else {
            impares.push(numeros[i]);
        }
    }
    
    
    numeros = pares.concat(impares);
    
    console.log("Array organizado (Pares primero, luego Impares):", numeros);
}


 

function calcularSueldoVendedor() {
    let registroVendedores = [];
    
    let nombre = nombreVendedor.value;
    let ventas = parseFloat(ventasVendedor.value);
    
    if (nombre === "" || isNaN(ventas)) {
        alert("Por favor, rellena todos los campos.");
        return;
    }
    
    let sueldoFinal = 200 + (ventas * 0.09);
    

    registroVendedores.push(`${nombre}, ${ventas}, ${sueldoFinal}`);
    
    resultadoVendedor.textContent = `El vendedor ${nombre} tiene un sueldo final de: $${sueldoFinal.toFixed(2)}`;
}

// Ejercicio 7
// a) Establecer los 10 elementos a cero
function inicializarCeros(miArray) {
    for (let i = 0; i < 10; i++) {
        miArray[i] = 0;
    }
    return miArray;
}

// b) Añadir 1 a cada uno de los elementos
function sumarUno(miArray) {
    for (let i = 0; i < miArray.length; i++) {
        miArray[i] = miArray[i] + 1;
    }
    return miArray;
}

// c) Muestra los valores separados por espacios
function mostrarConEspacios(miArray) {
    let texto = "";
    for (let i = 0; i < miArray.length; i++) {
        texto = texto + miArray[i] + " ";
    }
    return texto.trim();
}


//Ejercicio8

function simularDados() {
    // Array para contar frecuencias. Ponemos 13 posiciones rellenas de 0.
    let frecuencias = new Array(13).fill(0);
    
    // Simular 36.000 lanzamientos
    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1; // 1 al 6
        let dado2 = Math.floor(Math.random() * 6) + 1; // 1 al 6
        let suma = dado1 + dado2;
        
        // Sumamos 1 en la posición del resultado obtenido
        frecuencias[suma]++;
    }
    
    // Mostrar resultados por consola
    console.log("--- RESULTADOS SIMULACIÓN DADOS (SUMAS) ---");
    for (let suma = 2; suma <= 12; suma++) {
        console.log(`Suma ${suma}: aparecido ${frecuencias[suma]} veces.`);
    }
}

// Ejercicio 9
function simularDadosBidimensional() {
    // Creamos una matriz de 7x7 llena de ceros (usamos de índice 1 al 6 para comodidad)
    let combinaciones = [];
    for (let i = 0; i <= 6; i++) {
        combinaciones[i] = new Array(7).fill(0);
    }
    
    for (let i = 0; i < 36000; i++) {
        let d1 = Math.floor(Math.random() * 6) + 1;
        let d2 = Math.floor(Math.random() * 6) + 1;
        
        // Registramos la combinación exacta en la matriz
        combinaciones[d1][d2]++;
    }
    
    console.log("--- MATRIZ DE COMBINACIONES (Dado 1 vs Dado 2) ---");
    console.table(combinaciones); // console.table pinta las matrices de forma preciosa en la consola
}

