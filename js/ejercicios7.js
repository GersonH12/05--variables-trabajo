// 7. Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si 
// se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en 
// un console log.  
// Hacer un document.write para mostrar un mensaje dinámico en base a 2 
// propiedades que hayan elegido, ejemplo: 
// document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el 
// mercado alcanzando una velocidad de  object.propiedad2 por hora!`)

const auto = {
    marca: "Tesla",
    modelo: "Model S",
    color: "Verde",
    año: 2024,
    motor: "Electrico",
    velocidadMaxima: 300000,
    puertas: 4
};

console.log("Propiedades del auto:" , auto);
document.write(`El auto ${auto.marca} es uno de los mas revolucionarios y modernos de la tecnología tenidiendo un  grandioso motor ${auto.motor}.`);