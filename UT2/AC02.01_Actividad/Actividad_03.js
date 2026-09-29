/*
Actividad 03 — Propiedades del objeto Number y valores especiales (Práctica) 

Desarrolla  una  función  de  JavaScript  en  un  script  HTML  que  contenga  
el  siguiente  código.  Invócala adecuadamente desde el archivo para que los 
resultados se muestren en el navegador: 
*/

let maxValue = Number.MAX_VALUE; 
let minValue = Number.MIN_VALUE; 

function propiedades(){
    alert("Max Value: " + maxValue); 
    alert("Min Value: " + minValue); 
    alert("Valor especial: " + (maxValue * 2)); 

}

