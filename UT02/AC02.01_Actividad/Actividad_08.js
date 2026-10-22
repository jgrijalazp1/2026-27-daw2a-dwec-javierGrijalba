// Actividad 08 — Bucles iterativos simples (Cálculo del Factorial) (Práctica) 

// El factorial de un número n (n!) es la multiplicación de todos los números 
// enteros de 1 hasta n (ej: 5! = 5 x 4 x 3 x 2 x 1 = 120). Escribe un programa 
// JavaScript que solicite un número entero positivo al usuario y calcule su 
// factorial utilizando la estructura for. Implementa la lógica condicional para 
// asegurar que el número introducido sea un entero válido y positivo.

let num;
let factorial;

// Validacion de datos. Prompt siempre devuelve String. Hay que castearlo a 
// numerico con Number() y despues comprobar que es entero y mayor que 1.
do{
    num = prompt("Introduce un numero mayor que 1: ");
    num = Number(num);
}while( !Number.isInteger(num) ||  num < 1);

factorial = num;
for(i = num - 1; i > 1; i--){
    factorial *= i;
}

document.getElementById("parrafo").innerText = `Factorial de ${num}: ${factorial}`;

