<<<<<<< HEAD
class Alumno {
    constructor(id, nombre, notaMedia) {
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia = 5.00;
    }
}


class Colegio {
    constructor(nombre, numAulas, numAlumnos) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.numAlumnos = numAlumnos;
        this.alumnos = [];

        for (let i = 0; i < numAlumnos; i++) {
            let nuevoAlumno = new Alumno(i, `alumno${i + 1}`);
            this.alumnos.push(nuevoAlumno);
        }
    }


    consultarNotaMedia(idAlumno) {
        let alumnoEncontrado = this.alumnos.find(al => al.id === idAlumno);

        if (alumnoEncontrado) {
            console.log(`La nota media de ${alumnoEncontrado.nombre} (ID: ${idAlumno}) es: ${alumnoEncontrado.notaMedia}`);
            return alumnoEncontrado.notaMedia;
        } else {
            console.log(`No se encontró ningún alumno con el ID: ${idAlumno}`);
            return null;
        }
    }

    modificarNotaMedia(idAlumno, nuevaNota) {
        let alumnoEncontrado = this.alumnos.find(al => al.id === idAlumno);

        if (alumnoEncontrado) {
            alumnoEncontrado.notaMedia = nuevaNota;
            console.log(`Nota modificada con éxito. Nueva nota de ${alumnoEncontrado.nombre}: ${alumnoEncontrado.notaMedia}`);
        } else {
            console.log(`No se puede modificar. No existe el alumno con ID: ${idAlumno}`);
        }
    }
=======
class Alumno {
    constructor(id, nombre, notaMedia) {
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia = 5.00;
    }
}


class Colegio {
    constructor(nombre, numAulas, numAlumnos) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.numAlumnos = numAlumnos;
        this.alumnos = [];

        for (let i = 0; i < numAlumnos; i++) {
            let nuevoAlumno = new Alumno(i, `alumno${i + 1}`);
            this.alumnos.push(nuevoAlumno);
        }
    }


    consultarNotaMedia(idAlumno) {
        let alumnoEncontrado = this.alumnos.find(al => al.id === idAlumno);

        if (alumnoEncontrado) {
            console.log(`La nota media de ${alumnoEncontrado.nombre} (ID: ${idAlumno}) es: ${alumnoEncontrado.notaMedia}`);
            return alumnoEncontrado.notaMedia;
        } else {
            console.log(`No se encontró ningún alumno con el ID: ${idAlumno}`);
            return null;
        }
    }

    modificarNotaMedia(idAlumno, nuevaNota) {
        let alumnoEncontrado = this.alumnos.find(al => al.id === idAlumno);

        if (alumnoEncontrado) {
            alumnoEncontrado.notaMedia = nuevaNota;
            console.log(`Nota modificada con éxito. Nueva nota de ${alumnoEncontrado.nombre}: ${alumnoEncontrado.notaMedia}`);
        } else {
            console.log(`No se puede modificar. No existe el alumno con ID: ${idAlumno}`);
        }
    }
>>>>>>> 521707ef9f67f7e1a5193d05e187edd624f88c4e
}