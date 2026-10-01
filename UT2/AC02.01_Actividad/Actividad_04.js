/*
Actividad 04 — Operadores lógicos con tipos no booleanos (Truthy/Falsy) 

Prueba  el  siguiente script y explica detalladamente, mediante comentarios en cada
línea de asignación de la variable 'vacio' y 'mensajeVacio', qué está ocurriendo y
cómo reacciona JavaScript ante operadores lógicos aplicados a números y strings: 
*/

let cantidad = 0; 
// crea la variable cantidad y, al asignarle (0), adquiere tipo number
let vacio = !cantidad; 
// crea la variable vacio. Le asigna el contrario de cantidad que, al ser '!' un
// operador booleano, y (0) equivalente a 'false', resulta en un 'true'.
cantidad = 2; 
// reasigna cantidad a (2)
vacio = !cantidad;  
// al parecer, al castear number a booleano, solo (1) equivale a 'true', (0) y 
// cualquier otro valor (en este caso, (2)) resultan en 'false'.


let mensaje = ""; 
let mensajeVacio = !mensaje; 
// javascript considera que una cadena vacia (en tipo booleano) es igual a (0), 
// o sea 'false' 
mensaje = "Bienvenido";
mensajeVacio = !mensaje;
// y una cadena no vacia, en booleano, es 'true' y, por eso 'mensaje vacio', al 
// inicializarlo como lo contrario de 'mensaje', pasa a ser 'false'
let a;
