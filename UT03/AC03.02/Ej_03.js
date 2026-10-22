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

// Si da mas de una vuelta, es que el dni es invalido
do{
    dni = prompt(mensjDni);
    mensjDni = "Dni invalido, por favor, \nintroduzca un dni válido: ";
    //if(!valido(dni)){}
}while(!valido(dni));

// Si el usuario pulsa 'cancelar' en el dialogo prompt, asumo que quiere
// habandonar la ejecucion del programa. Lanzar una excepcion es la mejor
// forma que conozco para cortar la ejecucion, aunque produce un error por
// no capturar la excepcion.
if(dni == null){
    throw new Error("Hasta luego, cocodrilo");
}

// Para depurar
console.log(`El dni es ${dni}${letraDni(dni)}`);


function valido(dni){
    // Admito 'null' como valor aceptable para 'dni' porque significa que el
    // usuario a pulsado 'cancelar', en cuyo caso debe salir del bucle y 
    // terminar el programa.
    if(dni == null){return true;}

    // Compruebo que dni no es vacio ni tiene menos de 8 caracteres
    if(dni.length != 8){ return false;}
    
    // Compruebo que los primeros 8 caracteres corresponden a un entero
    if( !(Number.isInteger(Number(dni))) ){ return false;}

    // Si supera todas las pruebas, es valido.
    return true;
}

function letraDni(dni){
    let resto = dni % 23;
    let letra;  
    switch(resto){
            case 0: letra = 'T';
            break;
            case 1: letra = 'R';
            break;
            case 2: letra = 'W';
            break;
            case 3: letra = 'A';
            break;
            case 4: letra = 'G';
            break;
            case 5: letra = 'M';
            break;
            case 6: letra = 'Y';
            break;
            case 7: letra = 'F';
            break;
            case 8: letra = 'P';
            break;
            case 9: letra = 'D';
            break;
            case 10: letra = 'X';
            break;
            case 11: letra = 'B';
            break;
            case 12: letra = 'N';
            break;
            case 13: letra = 'J';
            break;
            case 14: letra = 'Z';
            break;
            case 15: letra = 'S';
            break;
            case 16: letra = 'Q';
            break;
            case 17: letra = 'V';
            break;
            case 18: letra = 'H';
            break;
            case 19: letra = 'L';
            break;
            case 20: letra = 'C';
            break;
            case 21: letra = 'K';
            break;
            case 22: letra = 'E';
            break;
            case 23: letra = 'T';
            break;
            default: letra = '';
    }
    return letra;
}