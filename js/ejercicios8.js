// 8. Tu lista de compras 
// Crea un array llamado listaDeCompras con cinco cosas que comprarías en tu próxima 
// visita al supermercado. Muestra cada elemento del array en la consola. 

const listaDeCompras = ["Gaseosa", "Arroz", "Queso", "Carne", "Frutas"];

console.log("listaDeCompras");
listaDeCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);

});