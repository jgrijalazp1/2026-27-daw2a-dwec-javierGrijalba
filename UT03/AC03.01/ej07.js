/*
7. Crea una pagina web y un script JavaScript para mostrar la hora actual en el
   momento de abrir la pagina web.

    a. Debes mostrar la hora en el formato HH:MM:SS.
    b. Siempre debe de haber dos digitos para la hora, minutos y segundos,
       gestionando las cantidades menores a 10.
*/

let ahora = new Date;
document.getElementById("hora").innerHTML = (`${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`); 