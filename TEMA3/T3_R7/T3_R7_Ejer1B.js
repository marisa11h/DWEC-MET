class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.lista = new Array();
    }

    comprobaredad() {
            if (this.edad >= 18) {
                console.log("Eres mayor de edad");
            }else{
                console.log("Eres menor de edad");
            }
    }


    añadir(li){
        this.lista.push(li);
    }
   

}