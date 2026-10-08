let input = prompt("Introduce un valor: ");
//isFinite devuelve false si isNaN, asi que es sufciente para verificar entrada de datos
if (isFinite(input)) {
  //5.34 pasaria isFinite pero no es Entero
  let inputParsed = parseInt(input);
  alert("parseInt (" + input + ") : " + inputParsed);
} else {
  alert("Error, no ha introducido un dato numerico");
}

