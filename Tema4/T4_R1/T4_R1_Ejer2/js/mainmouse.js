
const mousemover = () =>{
    document.addEventListener("mousemove", (event) =>{
        console.log(`Coordenadas: ${event.clientX}, ${event.clientY}`);
        document.getElementById("texto").textContent = 
        `(Coordenadas: ${event.clientX}, ${event.clientY})`
    });
};



(function () {
    mousemover();
})();