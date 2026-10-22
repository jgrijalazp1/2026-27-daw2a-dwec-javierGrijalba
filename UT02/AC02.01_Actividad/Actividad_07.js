// Actividad 07 — Funciones, argumentos y toma de decisiones (Práctica)

// Desarrolla una función JavaScript que reciba como argumento un único 
// carácter (que previamente habrás solicitado al usuario mediante un prompt). 
// La función debe devolver true si el carácter recibido es una vocal y 
// false en caso contrario. Desde tu código HTML principal, invoca a la función 
// y muestra un mensaje comprensible informándole del resultado.

let caracter = prompt("Introduce un caracter: ");

esVocal(caracter.at(0)) ? alert("ES UNA VOCAL!!!") : alert("FALLASTE! No es una vocal"); 

function esVocal(carac){
    //console.log(carac)
    return"aeiouAEIOU".includes(carac);
}
