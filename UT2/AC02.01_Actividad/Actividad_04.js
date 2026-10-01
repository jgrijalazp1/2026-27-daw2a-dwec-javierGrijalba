/*
Actividad 04 — Operadores lógicos con tipos no booleanos (Truthy/Falsy) 

Prueba  el  siguiente script y explica detalladamente, mediante comentarios en cada 
línea de asignación de la variable 'vacio' y 'mensajeVacio', qué está ocurriendo y 
cómo reacciona JavaScript ante operadores lógicos aplicados a números y strings: 
*/

let cantidad = 0; 
let vacio = !cantidad; 
cantidad = 2; 
vacio = !cantidad;  


let mensaje = ""; 
let mensajeVacio = !mensaje; 
mensaje = "Bienvenido";
mensajeVacio = !mensaje;

alert("lalala");