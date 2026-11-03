window.onload = function(){
    /* console.log("lalala");
    let anterior = window.opener;
    let color = anterior.document.getElementById('color').value;
    console.log(color); */
    
    /* let resultado = document.getElementById('resultado').value;
    let valor = opener.document.getElementById('color').value;
    resultado = valor; */

    document.getElementById('resultado').value = 
    opener.document.getElementById('color').value;
};