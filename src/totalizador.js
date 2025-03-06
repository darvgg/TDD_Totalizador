function precioNeto(a, b) {
  let precio = a * b;
  return parseFloat(precio.toFixed(2)); // Convierte el string de vuelta a número
}
function mostrar(cantidad,precio){
  let precio_n = precioNeto(cantidad,precio);
  let mostrar_p = "La cantidad es: " + cantidad  + "<br>" + "El precio por unidad es: " + precio + "<br>" + "El precio neto sera de (" + cantidad + "*"+ precio + "$): " + precio_n+"$";
  return mostrar_p; 
}

export {precioNeto, mostrar};