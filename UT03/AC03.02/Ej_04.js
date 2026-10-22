/*
Realiza una página html y un script JavaScript para realizar lo siguiente:  
    a.  Solicita al usuario el nombre de 3 ciudades  
    b.  Para cada ciudad solicita al usuario la temperatura del viernes, 
        sábado y domingo  
    c.  Almacena los datos en un array de dos dimensiones  
    d.  Después recorre el array, calcula la temperatura media del fin de 
        semana para cada ciudad y muéstraselo al usuario.  
*/

let ciudad = pedirCiudad(1);
let temp = pedirTemp(ciudad,0);

function pedirCiudad(numCiudad){
    let ciudad = '';
    do{
        prompt(`Introduce la ciudad numero ${numCiudad}`);
    }while(ciudad == '');
    return ciudad;
}

function pedirTemp(ciudad, dia){
    let nomDia = '';
    switch(dia){
        case 0: nomDia = 'Viernes';
        break;
        case 1: nomDia = 'Sabado';
        break;
        case 2: nomDia = 'Domingo';
        break;
    }
    
    let temp = '';
    do{
        temp = prompt(`Introduce la temperatura en ${ciudad} el ${nomDia}: `);
    }while( !Number.isInteger(temp) );


    return temp;
}