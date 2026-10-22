let entrada = new Date(2012, 1, 30) ;
let salida = new Date(2012, 2, 1);
let noches = (salida.getTime() - entrada.getTime()) / 86400000;
alert(noches);
alert(entrada.toLocaleString());
alert(entrada);