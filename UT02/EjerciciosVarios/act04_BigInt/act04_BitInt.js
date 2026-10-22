let primer_saludo = "hola";
let segundo_saludo = primer_saludo;
primer_saludo = "hello";

alert(primer_saludo);
alert(segundo_saludo);

let colores = new Object();
colores.favorito = 'azul';
let miscolores = colores;
miscolores.favorito = 'rojo';

alert(colores.favorito);
