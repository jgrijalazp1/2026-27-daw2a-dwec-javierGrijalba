/*
Realiza una página html y un script JavaScript que pida al usuario una serie 
de palabras y las almacene en un array. Posteriormente debes manipular el 
array para mostrar al usuario lo siguiente:  
a.  La primera palabra ingresada por el usuario  
b.  La última palabra ingresada por el usuario  
c.  El número de palabras del array 
d.  Todas las palabras ordenadas alfabéticamente. 
*/
 
let nueva = '';
const palabras = [];

// Pide al usuario, mediante prompt, palabras hasta que se pulse 'cancelar'.
// Al hacerlo, prompt devuelve 'null', si la cadena es vacia, devuelve ''.
// No añade cadenas vacias
do{
    nueva = prompt("Introduce una palabra (vacio para fin): ");
    if(nueva != null && nueva != ''){
        palabras.push(nueva);
    }
}while(nueva != null);

console.log(`Primera palabra: ${palabras[0]}`);
console.log(`Ultima palabra: ${palabras[palabras.length - 1]}`);
console.log(`Resultado: ${palabras.toString()}`);
console.log(`Numero de palabras: ${palabras.length}`);
console.log(`Ordenadas: ${palabras.sort()}`);