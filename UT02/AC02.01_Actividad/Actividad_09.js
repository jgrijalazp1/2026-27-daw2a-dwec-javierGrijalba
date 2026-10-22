// Actividad 09 — Iteración condicional e informes por Consola (Práctica)
//
// Desarrolla un código JavaScript que solicite un número entero al usuario. 
// El script debe realizar una iteración desde 0 hasta el número proporcionado, 
// evaluando paso a paso si el número del ciclo es par o impar. Muestra este 
// informe en la consola de depuración del navegador web mediante console.log().

num = 0;

// Copiado de la actividad anterior. No esta sacado directamente del modo IA
// de google, me he peleado con el codigo durante una buena media hora hasta
// que me ha funcionado.
do{
    num = prompt("Introduce un numero mayor que 1: ");
    num = Number(num);
}while( !Number.isInteger(num) ||  num < 1);


for(i =0; i <= num; i++){
    if(i % 2 == 0){
        console.log(`${i}, `);
    }
};

// Como sabemos que la iteracion siempre va a empezar en 0, se puede hacer que
// esta vaya saltando de 2 en 2, haciendo la mitad de repeticiones y en cada
// vuelta, i siempre sera par. El doble de eficiente. 
for(i = 0; i <= num; i+=2){
    console.log(`${i}, `);
};