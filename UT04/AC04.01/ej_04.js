/*
Array.from(document.getElementsByClassName("btEscritura")).forEach(
  (btEscritura) => {
    console.log("asdfasdf");
    btEscritura.addEventListener("click", function () {
      escribir(btEscritura.value);
    });
  },
);
*/
const botonesEscritura = document.getElementsByClassName("btEscritura");

// sin let o const el ambito es gloval y falla
for (let boton of botonesEscritura) {
    console.log(`Value: ${boton.value}`);
    boton.addEventListener("click", function () {
        escribir(boton.value);
    });
}

document.getElementById("btC").addEventListener("click", function(){
    escribir("C");
});

document.getElementById("btIgual").addEventListener("click", function(){
    escribir("Igual");
});

function escribir(simbolo) {
  console.log(simbolo);
};

function calcular() {};

function limpiar() {};

const limpiar2 = () => {};
