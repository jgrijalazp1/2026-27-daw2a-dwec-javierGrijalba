const txtOcultar = "Ocultar contenidos";
const txtMostrar = "Mostrar contenidos";

// Selecciona solo aquellos elementos 'a' cuyos atributos 'id'
// empiecen por 'enlace_'. Se usa la sintaxis de css.
const enlaces = document.querySelectorAll('a[id^="enlace_"]');

for(const enl of enlaces){
    // console.log(`${enl.id}`);
    enl.addEventListener("click", (evento) => {
        evento.preventDefault();
        const linkText = enl.textContent;
        if(linkText === txtOcultar){
            enl.textContent = txtMostrar;
            enl.previousElementSibling.style.display = "none";
        }else{
            enl.textContent = txtOcultar;
            enl.previousElementSibling.style.display = "";
        }
    });
};