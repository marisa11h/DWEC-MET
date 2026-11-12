
function shownNodos() {
    let totalnodos = document.querySelectorAll('a').length
    let cojohref = document.querySelectorAll('');
    let penultimo = cojohref[totalnodos - 2];
    console.log("todos los nodos: ", totalnodos );
    console.log("penultimo nodo: ", penultimo);
    
}


(function () {
  console.log("ejecutando un ejemplo") 
  shownNodos(); 
})()