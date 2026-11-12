function getProductos(url, analizaResultado) {
    fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data) 
    console.log("mostrando datos")
    muestraProductos(data);
  });
}

function muestraProductos(data) {
  let srtContenido = "";
  for (let item of data) {
    srtContenido += `<div>${item.id} - ${item.title}</div> `;
  }

  
  let data2 = data.map((item) => `<div>${item.id} - ${item.title}</div>`);
  let strsalida = data2.join("");
  console.log("data2", data2);
  console.log("strsalida", strsalida);
  
}
const muestraUsuarios=(data) => {
    document.getElementById("main").innerHTML = data.map((item) => `<div>${item.id} - ${item.username}</div> `).join("");
}

(function () {
    console.log(`Ejecutando el mainFetch`);
    getdatos = ('https://fakestoreapi.com/products', muestraProductos);
    getdatos2 = ('https://fakestoreapi.com/products', muestraUsuarios);
    getProductos();
})()