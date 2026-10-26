// Array bidimensional de temperaturas de 3 ciudades durante 4 días
const temperaturasCiudades = [
  [15.2, 18.0, 16.5, 19.1],
  [22.0, 24.5, 21.8, 25.0],
  [10.5, 12.0, 11.2, 13.8],
];

// Array de nombres de ciudades correspondiente a las temperaturas
const nombresCiudades = ['Madrid', 'Sevilla', 'Bilbao'];

// 1. Cálculo de Medias con .map y .reduce
function calcularMedias(temperaturas, nombres) {
  // TODO: Devuelve un nuevo array de objetos { ciudad, media } a 2 decimales
  
}

// 2. Filtrado y Ordenación con .filter y .sort
function filtrarYOrdenar(datosMedias) {
  // TODO: Filtra (medias > 15.0) y ordena de mayor a menor

}

// 3. Modificación y extracción con .slice y .splice
function modificarArrays(datosFiltrados, nombres) {
  // TODO: Usa .slice() en datosFiltrados y .splice() en nombres

  // Extraemos la primera ciudad sin tocar el array original usando slice
  // Realiza un console.log() para verificar
  
  // Usamos splice en una copia para no cargarnos el array original al pulsar varias veces
  // Realiza un console.log() para verificar

}

// Función principal que coordina a las demás
function procesarTemperaturas() {
  console.log('--- Iniciando proceso ---');

  // const mediasCalculadas = calcularMedias(temperaturasCiudades, nombresCiudades);
  // console.log('1. Medias calculadas:', mediasCalculadas);

  // const ciudadesOrdenadas = filtrarYOrdenar(mediasCalculadas);
  // console.log('2. Filtradas (>15) y ordenadas:', ciudadesOrdenadas);

  // modificarArrays(ciudadesOrdenadas, nombresCiudades);

}

// Instancia la función para probar el código.
procesarTemperaturas();
