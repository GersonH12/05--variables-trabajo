// 5. Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. 
// Muestra el resultado en un alert. 

const minutos = parseFloat(prompt("Ingrese a un numero de minutos"));

const segundos = minutos * 60;
const horas = minutos / 60;

alert(`Ingresastes minutos ${minutos} minutos, equivale a ${segundos}, segundos y a ${horas} horas.`);