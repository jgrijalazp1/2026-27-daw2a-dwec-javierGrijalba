/*
Realiza una página web que incluya un script JavaScript que:  
    a.  Solicite un número del Documento Nacional de Identidad,  
    b.  Mientras el dato proporcionado no sea un número entero válido 
        informe al usuario  
    c.  Una vez que el número de DNI sea válido, tiene que devolver la letra 
        que le corresponde para formar el NIF.  
    d.  La letra correspondiente se calcula en base a la operación "módulo" o 
        "resto de la división entera" del número del DNI entre 23. Una vez 
        obtenido el resultado de esta operación, se busca la letra 
        correspondiente un array que asigna dicha letra a cada uno de los 
        posibles restos. 
*/

let dni;
let mensjDni = "Introduzca un dni válido: ";

do{
    dni = prompt(mensjDni);
    if(!valido(dni)){
        mensjDni = "Dni invalido, por favor, \nintroduzca un dni válido: ";
    }
}while(!valido(dni));

// Si el usuario pulsa 'cancelar' en el dialogo prompt, asumo que quiere
// habandonar la ejecucion del programa. Lanzar una excepcion es la mejor
// forma que conozco para cortar la ejecucion, aunque produce un error por
// no capturar la excepcion.
if(dni == null){
    throw new Error("Hasta luego, cocodrilo");
}

console.log(`El dni es ${dni}`);


// Admito 'null' como valor aceptable para 'dni' porque significa que el
// usuario a pulsado 'cancelar', en cuyo caso debe salir del bucle y 
// terminar el programa.
function valido(dni){
    if(dni == null){return true;}

    if(dni == '' || dni.length != 9){ return false;}
    // Por si hay algun caso que no he tenido en cuenta
    return true;

}