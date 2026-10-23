class Telefono{
    constructor(numtelefono){
        this.numtelefono = numtelefono;
        this.llamadas = 0;
    }


    llamar(){
        this.llamadas += 1;
    }
}