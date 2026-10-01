/*
Actividad 10 — Lógica condicional e iterativa anidada (Patrón de Asteriscos)

Crea un programa JavaScript que solicite un número entero al usuario y visualice 
en la página HTML un triángulo alineado a la izquierda usando asteriscos. Si el 
usuario introduce el número 5, el resultado visual en la página web debe ser 
exactamente el siguiente:

*
**
***
****
*****

Utiliza bucles anidados en la implementación de la lógica.
*/

salida = "";

do{
    num = prompt("Introduce un numero mayor que 1: ");
    num = Number(num);
}while( !Number.isInteger(num) ||  num < 1);

for(i = 0; i <= num; i++){
    for(j = 0; j <= i; j++){
       salida += "*";
    };
    salida += "\n";
};

//alert(salida);
document.getElementById("parrafo").innerText = salida;
