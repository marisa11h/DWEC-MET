import db from '../Json/DB.json' with { type: 'json' };

function mostrarEstudiante(objEstudiante) {
    return `
        <p>${objEstudiante.id} - ${objEstudiante.name}</p>
        <p>${objEstudiante.email}</p>
        <p>${objEstudiante.enrollmentDate}</p>
        <p>${objEstudiante.active ? 'Activo' : 'De Baja'}</p>
        <p>${objEstudiante.level}</p>
    `;
}

function mostrarEstudiantes(arrEstudiantes, filtro) {
    const tarjetas = arrEstudiantes
        .filter(es => es.id < filtro)
        .map(estudiante => `<div class="student-card">${mostrarEstudiante(estudiante)}</div>`)
        .join('');
        
    return `<div class="flex-container">${tarjetas}</div>`;

}

function mostrarEstudiantesordenados(arrEstudiantes){
    const tarjetas = arrEstudiantes
    .sort((arr, ordenar) => arr.name.localeCompare(ordenar.name))
    .map(estudiante => `<div class="student-card">${mostrarEstudiante(estudiante)}</div>`)
    .join('');

    return `<div class="flex-container">${tarjetas}</div>`;
}

//Filtrar por id

function filtrarid(arr, id) {
    return arr.filter(arrEstudiantes => arrEstudiantes.id > id);
}

function filtrarlevel(arr, level) {
    return arr.filter(arrEstudiantes => arrEstudiantes.level > level);
}


(function () {
    document.getElementById('contenido').innerHTML = mostrarEstudiantesordenados(db.students);
})();