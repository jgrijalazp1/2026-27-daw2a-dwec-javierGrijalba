/*
5. Prueba los siguientes fragmentos de codigo y anade comentarios explicativos de lo
que hacen y el resultado que se obtiene:
*/

let fecha = new Date(0);
let fecha2 = new Date(10000000000000);
let fecha3 = new Date(2009, 5, 1);
let fecha4 = new Date(2009, 5, 1, 19, 29, 39);

let numero1 = 0;
let numero2 = 0;
alert(numero1 / numero2);

let numero3 = 0;
let numero4 = 0;

if (isNaN(numero1 / numero2)) {
/*Fíjate en la función global isNaN() de JavaScript*/
alert('La división no esta definida para los números indicados');
} else {
alert('La division es igual a => '+ numero1 / numero2);
}

let numero5 = 10;
let numero6 = 0;

alert(numero1 / numero2);

let numero7 = 4564.34567;
numero1.toFixed(2);
numero1.toFixed(6);
numero1.toFixed();

let numero8 = 4564.34567;
numero1.toPrecision(2);
numero1.toPrecision(6);
numero1.toPrecison();

let mensaje1 = 'Hola Mundo';
let numeroLetras = mensaje. length;

let mensaje2 = 'Hola';
let mensaje3 = mensaje1.concat(' Mundo');

let variable1 = 'Hola ';
let variable2 = 3;
let mensaje6 = variable1 + variable2;

let mensaje7 = 'Hola';
let mensaje8 = mensaje1.toUpperCase();

let mensaje9 = 'Hola';
let letra = mensaje9.charAt(0);
letra = mensaje9.charAt(2);

let mensaje10 = 'Hola';
let posicion = mensaje10.index0f('a');
posicion = mensaje10.lastIndex0f('b');

let mensaje11 = 'Hola Mundo';
let porcion = mensaje11.substring(2);
porcion = mensaje11.substring(-2);
porcion = mensaje11.substring(1, 8);

let mensaje12 = 'Hola Mundo, soy una cadena de texto!';
let palabras = mensaje12.split(' ');