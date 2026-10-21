export default class Clase{
    constructor(){
        this.lista = new Array();
    }

    añadir(li) {
    this.lista.push(li);
    }

    /**
     * Elimino el alumno li de la clase, 2 alumnos son iguales cuando tienen
     * el mismo código.
     * @param {Alumno} li 
     */
    deleteAlumno(li){
        let encontrar = this.lista.splice(this.lista.findIndex(alumno => alumno.id === li.id), 1);
    }

    recorrer() {
    this.lista.forEach(l => {
        console.log(l);
    });
    }

}

