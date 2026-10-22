//Ejercicio1
let sum = (num1, num2) => num1 + num2;

//Ejercicio2
let stringLength = (long) => console.log(`the length of "${long}" is:`, long.length);

//Ejercicio3
let stringLength2 = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
    return str.length;
};

//Ejercicio4
let showAlert = (alerts) => alert(alerts[Math.floor(Math.random() * alerts.length)]);

//Ejercicio5

let presentacion = (name, age) => console.log(`Hello, I am ${name}, and I am ${age} years old`);

//Ejercicio6
let sumArray = (numeros) => numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);

//Ejercicio7
let fire = () => `bulls-${eye}`;

//Ejercicio8
let fibonacci = (n) => (n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

