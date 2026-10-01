/*
Actividad 11 — Algoritmia avanzada (Cálculo de Números Primos en Consola)

Desarrolla un script JavaScript con una función encargada de calcular y 
encontrar todos los números primos comprendidos entre 1 y 100. Muestra la 
lista final de números primos identificados a través de la consola del 
navegador mediante console.log(). Guarda la lógica del script en un archivo 
JavaScript externo e impórtalo en tu documento HTML.

Creo que esto ultimo lo he estado haciendo en todos los ejercicios.

*/

numerosPrimos = primosHasta(100);

// El codigo es mas reutilizable si se puede cambiar el limite superior
function primosHasta(num){
    primos = [];

    for(candidato = num; candidato > 1; candidato--)
        if(esPrimo(candidato)){
            primos.push(candidato);
        }
    // porque 1 siempre es primo y es mas facil así.
    primos.push(1);
    return primos; 
}

function esPrimo(num){
    for(i = num - 1; i > 1; i--){
        if(num % i == 0){return false};
    }
    return true;
}

console.log(numerosPrimos.toString());
// console.log(`lalala: ${numerosPrimos}`);
// console.log(numerosPrimos.join(', '));

// No entiendo como se puede acceder a 'primos' desde fuera de la funcion 
// donde ha sido creado, se supone que su scope se limita a ella.

// console.log(JSON.stringify(primos));
// console.log(JSON.stringify(numerosPrimos));