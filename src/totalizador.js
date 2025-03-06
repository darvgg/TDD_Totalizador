function precioNeto(a, b) {
  let precio = a * b;
  return parseFloat(precio.toFixed(2)); 
}

function obtener_porcentaje_impuesto_estado(cod_estado){
  let porcentaje_impuesto_estado;
  switch (cod_estado) {
    case "CA":
      porcentaje_impuesto_estado = 0.0825;
      break;
    case "AL":
      porcentaje_impuesto_estado = 0.04;
      break;
    case "NV":
      porcentaje_impuesto_estado = 0.08;
      break;
    case "UT":
      porcentaje_impuesto_estado = 0.0665;
     break;
    case "TX":
      porcentaje_impuesto_estado = 0.0625;
     break;
  }
  return porcentaje_impuesto_estado;
}

function calcular_impuesto_estado(precio_n,cod_estado){
  let impuesto_estado = obtener_porcentaje_impuesto_estado(cod_estado);
  let impuesto = precio_n*impuesto_estado;
  return parseFloat(impuesto.toFixed(2));
}

function mostrar(cantidad,precio,cod_estado){
  let precio_n = precio_neto(cantidad,precio);
  let porcentaje_impuesto_estado = obtener_porcentaje_impuesto_estado(cod_estado);
  let impuesto= calcular_impuesto_estado(precio_n,cod_estado);

  let mostrar_p = "La cantidad es: " + cantidad  + "<br>" + 
  "El precio por unidad es: " + precio + "<br>" +
  "Codigo de estado es: " + cod_estado + "<br>"+
  "El precio neto sera de (" + cantidad + "*"+ precio + "$): " + precio_n+"$" + "<br>" +
  "Impuesto para "+cod_estado+"(%"+(porcentaje_impuesto_estado*100)+"): "+impuesto;
  return mostrar_p; 
}

export {precioNeto, calcular_impuesto_estado,mostrar};