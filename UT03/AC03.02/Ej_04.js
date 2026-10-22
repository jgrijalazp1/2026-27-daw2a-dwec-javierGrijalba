/*
Realiza una página html y un script JavaScript para realizar lo siguiente:  
    a.  Solicita al usuario el nombre de 3 ciudades  
    b.  Para cada ciudad solicita al usuario la temperatura del viernes, 
        sábado y domingo  
    c.  Almacena los datos en un array de dos dimensiones  
    d.  Después recorre el array, calcula la temperatura media del fin de 
        semana para cada ciudad y muéstraselo al usuario.  
*/

//let ciudad = pedirCiudad(1);
//let temp = pedirTemp(ciudad,0);

let palabras_espana = new Array('facebook', 'tuenti', 'youtube', 'hotmail', 'marca');
let palabras_suiza = new Array('facebook', 'youtube', 'hotmail', 'google', 'blick');
let palabras_portugal = new Array('facebook', 'youtube', 'hotmail', 'jogos', 'download');

let palabras_mas_buscadas = new Array(palabras_espana, palabras_suiza, palabras_portugal);

let ciudade = [ ['madrid',[12,4,7]] , ['Barcelona',[25,14,8]] , ['Torrelavega',[20,6,0]] ];

let ciudades = [];
// Recoje el nombre de 3 ciudades y los almacena en las primeraras posiciones 
// de un array de 3 elementos tipo [ 'ciudad',[t1,t2,t3] ]
for(let i = 0; i <= 2; i++){
    ciudades.push(pedirCiudad(i));
}

for(let i = 0; i <= 2; i++){
    for(let j = 0; j <=)
}




/**
 * Gestiona que el prompt pida el nombre de una ciudad
 *
 * @param {entero} numCiudad : para informar al usuario en el prompt(usabilidad)
 * @returns {string} ciudad : 
 */
function pedirCiudad(numCiudad){
    let ciudad = '';
    do{
        ciudad = prompt(`Introduce la ciudad numero ${numCiudad}`);
    }while(ciudad == '');
    return ciudad;
}

/**
 * Para una ciudad y un dia, pide por prompt, valida y devuelve
 * una temperatura 
 *
 * @param {string} ciudad : el nombre de la ciudad para el prompt
 * @param {entero[0-2]} dia : el numero de dia [viernes = 0, sabado = 1, domingo = 2]
 * @returns {numero} temp : la temperatura para ese dia en esa ciudad
 */
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
        temp = Number( prompt(`Introduce la temperatura en ${ciudad} el ${nomDia}: `) );
    }while( !Number.isNaN(temp) );

    return temp;
}