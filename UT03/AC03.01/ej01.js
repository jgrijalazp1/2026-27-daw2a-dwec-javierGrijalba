let base = pideFloatPositivo('Introduce la base');
let altura = pideFloatPositivo('Introduce la altura');

alert(`La base es: ${base}`);
alert(`La altura es: ${altura}`);


function pideFloatPositivo(men){
    let mensajeError;
    let salida;
    do{
        mensajeError = '';
        salida = prompt(men);
        if(isNaN(salida)){
            
        }
        if(salida <= 0){
            mensajeError = 'Numero no valido';
        }
    }while(mensajeError);
}