// 4. Pide al usuario dos valores y muestra cómo se intercambian entre sí. Por ejemplo, si ingresa 
// a=5 y b=10, el resultado será a=10 y b=5. Los resultados se deben mostrar con un 
// document.write 
// donde se muestre si el user ingreso a=5 y b=10: 
// a = 10 


let a = prompt("Ingrese el valor de a:");
let b = prompt("Ingrese el valor de b");
document.write(`<p>Valores iniciales: a = ${a}, b = ${b}</p>`);

let inter = a;
a = b;
b = inter;

document.write(`<p>Valores intercambiadors: a = ${a}, b = ${b}</p>`);