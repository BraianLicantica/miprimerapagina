// Ecuentra al elemento HTML (el boton) mediante su ID
const miboton = document.getElementById("miboton");

//Define la funcion  que se ejecutara cuando se haga clicl en el boton
function handeClick(){
    alert("¡Hola has echo click en el botón");


// Asigna el evento click al botón y llama a la función handleClick cuando se produzca el evento
miBoton.addEventListener("click", handleClick);
}