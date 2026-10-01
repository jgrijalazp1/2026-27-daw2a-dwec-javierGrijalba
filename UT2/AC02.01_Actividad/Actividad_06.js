// Actividad 06 — Estructuras de decisión simples y validación de tipos (Práctica)
//   
// Desarrolla una función JavaScript que solicite dos números enteros 
// al usuario utilizando la función prompt() y visualice en pantalla 
// (mediante una ventana de alerta) cuál es el mayor de ellos.

let entero1 = prompt("Introduce el primer entero: ");
let entero2 = prompt("Introduce el segundo entero: ");
let mayor = 0;
 
numeroMayor(entero1, entero2);

function numeroMayor(num1, num2){
    if(num1 > num2){
        alert("El numero mayor es el primero");
    }else{
        if(num1 == num2){
            alert("Ambos numeros son iguales");
        }else{
        alert("El numero mayor es el segundo");
        }
    }
};




