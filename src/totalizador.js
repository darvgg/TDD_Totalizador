function precioNeto(a, b) {
  let precio = a * b;
  return parseFloat(precio.toFixed(2)); 
}

function obtener_impuesto_estado(cod_estado){
  let impuesto_estado;
  switch (cod_estado) {
    case "CA":
      impuesto_estado = 0.0825;
      break;
  }
  return impuesto_estado;
}

function mostrar(cantidad,precio,cod_estado){
  let precio_n = precioNeto(cantidad,precio);
  let impuesto_estado = obtener_impuesto_estado(cod_estado);
  let mostrar_p = "La cantidad es: " + cantidad  + "<br>" + 
  "El precio por unidad es: " + precio + "<br>" +
  "Codigo de estado es: " + cod_estado + "<br>"+
  "El precio neto sera de (" + cantidad + "*"+ precio + "$): " + precio_n+"$" + "<br>" +
  "Impuesto para "+cod_estado+"(%"+impuesto_estado+"): ";
  return mostrar_p; 
}

export {precioNeto, mostrar};