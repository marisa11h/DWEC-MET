import Ingrediente from "./Ingrediente.js";
import Receta from "./Receta.js";


(function () {
    let receta1 = new Receta(1, "tortilla de patatas", "1.-Pelar patatas,<br> 2.-Cortar Patatas,<br>  3.-Coger los huevos y ponerlos en un bol para mezclarlos");
    let ingrediente1 = new Ingrediente("patatas", 4, "unidades");
    let ingrediente2 = new Ingrediente("Huevos", 7, "unidades");
    let ingrediente3 = new Ingrediente("Harina", 1, "kg");

    receta1.push(ingrediente1);
    receta1.push(ingrediente2);
    receta1.push(ingrediente3);

    
    
    
    //const contenedor = document.getElementById("contenido").innerHTML = ingrediente1.show();  
    const contenedor = document.getElementById("contenido").innerHTML = receta1.show();
    
})();