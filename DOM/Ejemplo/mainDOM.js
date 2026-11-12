
function showNodosDiv() {
  let nodoPrincipal = document.getElementById('principal');
  let nodoIndividual = document.querySelector("div");

  let htmlColeccionDiv = document.getElementsByTagName("div");
  let nodListColeccionDiv = document.querySelectorAll("div");

 console.log("nodoprincipal", nodoPrincipal.tagName)
}


(function () {
  console.log("ejecutando un ejemplo")  
  showNodosDiv();
})()