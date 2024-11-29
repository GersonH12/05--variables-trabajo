// 6. Calcular el IVA de un producto 
// Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = 
// $1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert. 

const precioDolares = parseFloat(prompt("Ingrese el precio en dolares"));

const tasaDeCambio = 1130;
const precioPesos = precioDolares * tasaDeCambio;

const iva = precioPesos * 0.21;

const preicpFinal = precioPesos + iva;
alert(`El preico en pesos es: ${precioPesos} Iva ${iva}, precio final con iva: $${preicpFinal}`);