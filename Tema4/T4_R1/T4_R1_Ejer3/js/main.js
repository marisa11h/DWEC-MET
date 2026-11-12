
const Loadcarga = () => {
    let tiempoInicio = new Date();
    document.addEventListener("load", (event) => {
        let tiempoFinal = new Date();
        let tiempoTranscurrido = tiempoFinal - tiempoInicio;
        console.log("La página tardó en cargar: " + tiempoTranscurrido + " milisegundos");
         document.getElementById("texto").textContent = 
        `(La página tardó en cargar: " + ${tiempoTranscurrido} + " milisegundos)`
    });
};






(function () {
    Loadcarga();
})();