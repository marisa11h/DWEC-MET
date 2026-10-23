export default class Receta{
    constructor(id, nombre, elaboracion){
        this.id = id;
        this.nombre = nombre;
        this.elaboracion = elaboracion;
        this.ingredientes = new Array();
    }

    show(){
        return `<p>El id de la receta es: ${this.id} </p>
        <p>El nombre de la receta es: ${this.nombre}</p>
        <p>La elaboración de la receta es: ${this.elaboracion}</p>
        <p>Los ingredientes son: ${this.ingredientes}>/p>`
        
    }
}