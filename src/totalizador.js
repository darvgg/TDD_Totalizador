function precioNeto(a, b) {
return parseFloat(precio.toFixed(2)); 
}

function mostrar(cantidad,precio){
  let precio_n = precio_neto(cantidad,precio);
  let mostrar_p = "La cantidad es: " + cantidad  + "<br>" + "El precio por unidad es: " + precio + "<br>" + "El precio neto sera de (" + cantidad + "*"+ precio + "$): " + precio_n+"$";
  return mostrar_p; 
}

export {precioNeto, mostrar};