/*
Actividad 02 — Cadenas de texto, caracteres de escape y comillas (Práctica) 

Dadas las siguientes declaraciones de variables de tipo String, 
Realiza los siguientes scripts: 

let texto1 = "Una frase con 'comillas simples' dentro"; 
let texto2 = 'Una frase con "comillas dobles" dentro'; 
 
1.  Realiza  un  script  que  muestre  el  contenido  de  ambas  variables 
    separado  por  un  salto  de  línea 
    (retorno de carro) en una ventana de alerta (alert()). 

2.  Realiza  otro  script  que  muestre  el  siguiente  mensaje  literal  
    al  usuario  utilizando  una  sola  función alert(): 
 
    Hola Mundo! 
    Qué fácil es incluir 'comillas simples' y "comillas dobles"

*/

let texto1 = "Una frase con 'comillas simples' dentro"; 
let texto2 = 'Una frase con "comillas dobles" dentro'; 
 
function saltoDeLinea(){
    alert(texto1 + "\n" + texto2);
}

function comillas(){
    alert("Hola Mundo! Que facil es incluir 'comillas simples' y \"comillas dobles\n");
}




