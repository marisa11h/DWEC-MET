import Alumno from "./Alumnos.js"
import Clase from "./Clase.js"



(function () {
    let clase1 = new Clase();
    let alumno1 = new Alumno(1, "Alice", "Thorton");
    let alumno2 = new Alumno(10, "Alberto", "Manzano");
    let alumno3 = new Alumno(5, "Sam", "Stone");
    console.log(alumno1.nombre);
    clase1.añadir(alumno1);
    clase1.añadir(alumno2);
    clase1.añadir(alumno3);
    clase1.deleteAlumno(alumno3);
    clase1.recorrer();
})()




