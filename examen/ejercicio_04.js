
// TODO: Redacta la documentación JSDoc
class ConfiguracionApp {
  
  // TODO: Redacta la documentación JSDoc
  constructor(idioma, temaVisual, nivelLogs) {
    // 1. Patrón Singleton
    if(ConfiguracionApp::class)
    // TODO: Comprueba si ya existe ConfiguracionApp.instancia
      // Si existe, devuélvela. 
      // Si no, guarda "this" en esa propiedad y asigna los parámetros.
    
  }

  // TODO: Redacta la documentación JSDoc
  obtenerConfiguracion() {
    return {
      idioma: this.idioma,
      temaVisual: this.temaVisual,
      nivelLogs: this.nivelLogs
    };
  }
}

function iniciarApp() {
  // TODO: Instancia la clase dos veces (ej. config1 y config2)
  

  // TODO: Demuestra con un console.log que ambas variables son la misma instancia
  
  // TODO: Muestra la configuración de ambas instancias con console.table
  // console.table(config1.obtenerConfiguracion());
  // console.table(config2.obtenerConfiguracion());
}

// Instancia la función para probar el código.