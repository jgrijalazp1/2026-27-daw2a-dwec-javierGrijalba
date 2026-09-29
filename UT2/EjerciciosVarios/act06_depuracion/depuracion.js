// docudocument.getElementById("mi-cuerpo").innerHTML = "<p>Hola, esto es un párrafo</p>"; // ment.write

console.log("Et pur si muove");

let a = 0;
let b = 5;

function AreaRectangulo(base, altura){
    return base * altura;
}

const AreaCuadrado = (lado) => {
    return AreaRectangulo(lado,lado);
}

function Saludar(){
    alert("Hola mundo!");
}

function Salta(){
    alert("SALTA !!!");
}

console.log("\nAreaCuadrado: "  + AreaRectangulo(3, 3));
console.log("");
console.log("");

/* for(i = 1; i < b; i ++){
    console.log(i);
} */