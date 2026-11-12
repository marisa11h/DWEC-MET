const alumnos = [
    {id: 1, nombre: "Alex", curso: "1DAW"},
    {id: 2, nombre: "Diana", curso: "2DAW"},
    {id: 3, nombre: "Alia", curso: "1DAW"},
];

const fCreaAlumnos = () => {
    let nodo;
    let principalnodo = document.getElementById("principal");
    alumnos.forEach(item => {
        nodo = fCreaAlumno(item);
        principalnodo.appendChild(nodo);
    }) 
    
}

const fCreaAlumno = (obalumno) => {
    let div = document.createElement("div");

    let alumnoid = document.createElement('p');
    let aId = document.createTextNode(obalumno.id);

    let alumnon = document.createElement('p');
    let aNombre = document.createTextNode(obalumno.nombre);

    let alumnoc = document.createElement('p');
    let aCurso = document.createTextNode(obalumno.curso);

    alumnoc.appendChild(aCurso);
    alumnon.appendChild(aNombre);
    alumnoid.appendChild(aId);
    
    div.appendChild(alumnoc);
    div.appendChild(alumnon);
    div.appendChild(alumnoid);

    return div;
}

const fCreaParrafo = (strtexto) => {
    let div = document.getElementById("principal");
    let parrafo = document.createElement('p');
    let texto = document.createTextNode(strtexto);
    parrafo.appendChild(texto);
    div.appendChild(parrafo);
}



function asociaEventos() {
    let bntCreaParrafo = document.getElementById('creaparrafo');
   /* //Primera forma de hacerlo
    console.log('bntCreaParrafo');
    bntCreaParrafo.onclick= () => alert("prueba");*/

    //Segunda forma de hacerlo
    bntCreaParrafo.addEventListener("click", () => fCreaAlumnos());
}   


(function () {
    console.log("Ejecutando ejemplo");
    asociaEventos();
})()