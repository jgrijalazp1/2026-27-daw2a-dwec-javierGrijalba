const btEnviar = document.getElementById("enviar");


btEnviar.addEventListener("click", (pulsar) => {
   // querySelectorAll crea un array estatico, no se actualiza en vivo
   // cuando se modifica el DOM. Hay que recargar la lista cada vez.
   const listaChk = document.querySelectorAll('input[type="checkbox"].productos:checked');
   let listaImprimir = "";
   listaChk.forEach((elemento) => {
      console.log(elemento.value);
      listaImprimir += `${elemento.value}\n`;
   });
   alert(listaImprimir);
});

formulario.querySelectorAll(".productos").forEach( (casillaProducto) => {
   casillaProducto.addEventListener("change", (evento) =>{
      const casillasSistemas = formulario.querySelectorAll('input[type="checkbox"].sistemas')
   });
});