export default class Ingrediente{
    constructor(nombre, cantidad, unidades){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.unidades = unidades;
    }

    show() {
        return `<p>Los ingrendientes son:<br>
            1.- ${this.nombre}, ${this.cantidad}, ${this.unidades}  
        </p>`
    }
    

}