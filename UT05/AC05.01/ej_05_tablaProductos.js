const btEnviar = document.getElementById("enviar");

btEnviar.addEventListener("click", (pulsar) => {
   // querySelectorAll crea un array estatico, no se actualiza en vivo
   // cuando se modifica el DOM. Hay que recargar la lista cada vez.
   const listaChk = document.querySelectorAll('input[type="checkbox"]:checked');
   let listaImprimir = "";
   listaChk.forEach((elemento) => {
      console.log(elemento.value);
      listaImprimir += `${elemento.value}\n`;
   });
   alert(listaImprimir);
});

document.getElementsByClassName("sistemas").forEach( (elemento) => {
    
});