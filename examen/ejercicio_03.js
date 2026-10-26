// 1. Clase (Vehiculo)
// TODO: Crea la clase Vehiculo con su constructor (marca, modelo, fechaMatriculacion).
// Las propiedades deben de ser PRIVADAS.
// Recuerda que _fechaMatriculacion debe ser un objeto Date.
class Vehiculo{
  let this._marca;
  let this._modelo;
  let _fechaMatriculacion = new Date();
  
  constructor(marca, modelo, fechaMatriculacion){
    this._marca = marca;
    this._modelo = modelo;
    this._fechaMatriculacion = _fechaMatriculacion;
  }
// TODO: Añade el método calcularAntiguedad() que devuelva los años transcurridos a 2 decimales. 
// Ayuda: milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25;

// TODO: Añade el método obtenerDetalles() que devuelva un texto con los datos del vehículo.
  



// 2. Clase (Turismo)
// TODO: Crea la clase Turismo que herede de Vehiculo.
// TODO: Llama al constructor padre con super() y añade la propiedad privada combustible.
// TODO: Sobrescribe obtenerDetalles() para añadir el tipo de combustible.



// 3. Gestión de Colecciones e instanceof
function gestionarFlota() {
  // TODO: Crea un array con al menos 4 objetos (mezclando Vehiculo y Turismo).
  // Puedes pasar las fechas en formato "YYYY-MM-DD" para facilitar la creación.
  

  // TODO: Recorre el array. Usa el operador instanceof para detectar
  // cuáles son de la clase Turismo e imprime por consola sus detalles.
  // Solo hay que imprimir los detalles de los Turismos.
  

}
}
// Instancia la función para probar el código.