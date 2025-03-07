function obtener_precioNeto(a, b) {
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

function obtener_porcentaje_descuento(precio_neto){
  let porcentaje_descuento = 0;
  if (precio_neto>=1000 && precio_neto<3000){
    porcentaje_descuento=0.03;
  }
  else if (precio_neto>=3000 && precio_neto<7000){
    porcentaje_descuento=0.05;
  }
  else if (precio_neto>=7000 && precio_neto<10000){
    porcentaje_descuento=0.07;
  }
  else if (precio_neto>=10000 && precio_neto<30000){
    porcentaje_descuento=0.1;
  }
  else if (precio_neto>=30000){
    porcentaje_descuento=0.15;
  }
  return porcentaje_descuento;
}

function calcular_descuento(precio_neto){
  let porcentaje_descuento = obtener_porcentaje_descuento(precio_neto);
  let descuento = precio_neto * porcentaje_descuento;
  return parseFloat(descuento.toFixed(2));
}

function obtener_Porcentaje_Impuesto_Categoria(categoria) {
  const impuestos = {
    "Alimentos": 0,
    "Bebidas Alcoholicas": 0.07,
    "Material escritorio":  0,
    "Muebles": 0.03,
    "Electronicos": 0.04,
    "Vestimenta": 0.02,
    "Varios": 0
  };
  return impuestos[categoria] || 0;
}

function calcular_Impuesto_Categoria(precio, categoria) {
  let porcentaje_impuesto_categoria = obtener_Porcentaje_Impuesto_Categoria(categoria);
  let impuesto = precio*porcentaje_impuesto_categoria;
  return parseFloat(impuesto.toFixed(2));
}

function obtener_porcentaje_descuento_categoria(categoria){
  const descuento = {
    "Alimentos": 0.02,
    "Bebidas Alcoholicas": 0,
    "Material Escritorio": 0.015,
  };
  return descuento[categoria] || 0;
}

function calcular_descuento_categoria (precio, categoria){
  let porcentaje_descuento_categoria = obtener_porcentaje_descuento_categoria(categoria);
  let descuento_categoria = precio*porcentaje_descuento_categoria;
  return parseFloat(descuento_categoria.toFixed(2));
}

function mostrar(cantidad,precio,cod_estado, categoria){
  let precio_n = obtener_precioNeto(cantidad,precio);

  let porcentaje_impuesto_estado = obtener_porcentaje_impuesto_estado(cod_estado);
  let impuesto_estado= calcular_impuesto_estado(precio_n,cod_estado);

  let porcentaje_impuesto_categoria = obtener_Porcentaje_Impuesto_Categoria(categoria);
  let impuesto_categoria = calcular_Impuesto_Categoria(precio_n, categoria);
  
  let porcentaje_descuento_categoria = obtener_porcentaje_descuento_categoria(categoria);
  let descuento_categoria = calcular_descuento_categoria(precio_n,categoria);
  
  let porcentaje_descuento = obtener_porcentaje_descuento(precio_n);
  let descuento = calcular_descuento(precio_n);

  let precio_con_impuestos = precio_n + impuesto_estado + impuesto_categoria;
  let precio_total= precio_con_impuestos - descuento - descuento_categoria;
  
  let mostrar_p = `
    La cantidad es: ${cantidad} <br>
    El precio por unidad es: ${precio} <br>
    Categoria del item: ${categoria} <br>
    Codigo de estado es: ${cod_estado} <br>
    Precio neto (${cantidad} * $${precio.toFixed(2)}): $${precio_n.toFixed(2)}<br>
    Impuesto para ${cod_estado} (${(porcentaje_impuesto_estado * 100).toFixed(2)}%): +$${impuesto_estado}<br>
    Impuesto por categoría (${(porcentaje_impuesto_categoria* 100).toFixed(2)}%): +$${impuesto_categoria}<br>
    Descuento (${(porcentaje_descuento* 100).toFixed(2)}%): -$${descuento}<br>
    Descuento Categoria (${(porcentaje_descuento_categoria* 100).toFixed(2)}%): -$${descuento_categoria}<br>
    Precio total (con descuentos e impuestos): $${precio_total.toFixed(2)}<br>
  `
  return mostrar_p; 
}

export {obtener_precioNeto, calcular_impuesto_estado,calcular_descuento,mostrar};