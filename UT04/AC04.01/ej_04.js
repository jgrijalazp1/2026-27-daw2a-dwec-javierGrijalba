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

for (boton of botonesEscritura) {
    console.log("Value", boton.value);
    boton.addEventListener("click", function () {
        escribir(boton.value);
    });
}

function escribir(simbolo) {
  console.log(simbolo);
}

function calcular() {}

function limpiar() {}

const limpiar2 = () => {};
