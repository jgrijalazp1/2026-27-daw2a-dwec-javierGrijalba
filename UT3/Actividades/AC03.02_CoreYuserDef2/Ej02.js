/*
Ejecuta el siguiente código en el navegador y añade comentarios 
explicativos de lo que hace
*/

// Crea el array 'myFish' con 4 elementos iniciales
let myFish = ["angel", "clown", "mandarin", "surgeon"];
// Alert produce una ventana de notificacion y, si se intenta
// escribir un array, por defecto imprime sus valores separados
// por comas
alert("myFish: " + myFish);

// .splice() añade a 'myFish' el elemento 'drum' en la posicion
// 2 y, al no eliminar ningun elemento, removed se crea como
// como array vacio
let removed = myFish.splice (2, 0, "drum");
alert("After adding 1: " + myFish);
alert("removed is: " + removed);

// Al no especificar un elemento a añadir, no lo hace, per si
// que elimina un elemento del array 'myFish', el que esta en el 
// indice 4, 'mandarin'. En este caso, al haber eliminado, 
// 'removed' sí tiene contenido.
removed = myFish.splice (3, 1);
alert("After removing 1: " + myFish);
alert("removed is: " + removed);

// Inserta 'trumpet' en el indice 2 y elimina UN elemento a partir
// de esa posicion. Es dedir, splice(x, 1, "lalala") se puede usar
// para sustituir el elemento en la posicion 'x' por 'lalala'
removed = myFish.splice (2, 1, "trumpet");
alert("After replacing 1: " + myFish);
alert("removed is: " + removed);

// Inserta 3 elementos desde la posicion 0 y elemina dos elementos,
// los de los indices 0 y 1. Tambien añade los elementos eliminados
// al array removed, eliminando previamente todos lo elementos que 
// contenia. 
// Como nota interesante, 'splice' elimina elementos antes de añadir
// los nuevos.  
removed = myFish. splice (0, 2, "parrot", "anemone", "blue");
alert("After replacing 2: " + myFish);
alert("removed is: " + removed);

