// getElementsByClassName no devuelve una referencia a un elemento, 
// sino una coleccion de referencias a elementos, en este caso,
// con una sola referencia, la [0].
const scRaton = document.getElementsByClassName("cuadroRaton")[0];
const scTeclado = document.getElementsByClassName("cuadroTeclado")[0];

const lbNavegador = document.getElementById("navegador");
const lbPagina = document.getElementById("pagina");

const lbCaracter = document.getElementById("caracter");
const lbCodigo = document.getElementById("codigo");

// Al mover el raton
document.addEventListener("mousemove", (mover) => {
    // console.log(`PosX: ${mover.clientX}   PosY: ${mover.clientY}`);
    lbNavegador.innerText = `[${mover.clientX}, ${mover.clientY}]`;
    lbPagina.innerText = `[${mover.pageX}, ${mover.pageY}]`;
    scRaton.style.backgroundColor = `white`;
    scTeclado.style.backgroundColor = `white`;
});

document.addEventListener("click", (clickar) => {
    scRaton.style.backgroundColor = `#FFFFCC`;
});

document.addEventListener("keypress", (pulsar) => {
    lbCaracter.innerText = `[${pulsar.key}]`;
    lbCodigo.innerText = `[${pulsar.code}]`;
    scTeclado.style.backgroundColor = `#CCE6FF`;
});
