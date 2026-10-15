/*
Desarrolla una función JavaScript que reciba como argumentos dos cadenas y un
número que será una posición de la primera cadena a partir de la cuál debes insertar
la segunda cadena proporcionada. La función devuelve la cadena resultante. Los
parámetros los solicitarás al usuario realizando el control de errores necesario.
*/

let cadLocal = entradaDatos('Introduce la primera cadena: ');
let cadInvasora = entradaDatos('Introduce la segunda cadena: '); 
let posicionInsertar = entradaDatos('Introduce la posicion en la que insertar');

console.log( insertar(cadLocal, cadInvasora, posicionInsertar) );

function insertar(cadLocal,cadInvasora, posicionInsertar){
    // Si la cadena original es demasiado corta para la posicion en la que se
    // quiere insertar, se pone al final.
    let largo = cadLocal.length;
    if(largo < posicionInsertar){
        posicionInsertar = largo;
    }
    posicionInsertar--;

    let parte1 = cadLocal.slice(0, posicionInsertar);
    let parte2 = cadLocal.slice(posicionInsertar, largo);
    return parte1 + cadInvasora + parte2;
}

function entradaDatos(mensaje){
    return prompt(mensaje);
}