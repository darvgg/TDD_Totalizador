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
    "Muebles": 0,
    "Electronicos": 0.01,
    "Vestimenta": 0,
    "Varios": 0
  };
  return descuento[categoria] || 0;
}

function calcular_descuento_categoria (precio, categoria){
  let porcentaje_descuento_categoria = obtener_porcentaje_descuento_categoria(categoria);
  let descuento_categoria = precio*porcentaje_descuento_categoria;
  return parseFloat(descuento_categoria.toFixed(2));
}

function calcular_Peso_Volumetrico(cantidad, pesoItem) {
  return parseFloat((cantidad * pesoItem).toFixed(2));
}

function calcular_Costo_Envio(cantidad, pesoItem) {
  let costo=0;
  let pesoVolumetrico = calcular_Peso_Volumetrico(cantidad, pesoItem);
  if (pesoVolumetrico > 0 && pesoVolumetrico <= 10) { 
    costo = 0;
  } else if (pesoVolumetrico > 10 && pesoVolumetrico <= 20) {
    costo = 3.5;
  } else if (pesoVolumetrico > 20 && pesoVolumetrico <= 40) {
    costo = 5;
  }
  else if (pesoVolumetrico > 40 && pesoVolumetrico < 80) {
    costo = 6;
  }
  else if (pesoVolumetrico >= 80 && pesoVolumetrico <= 100) {
    costo = 6.5;
  }
  else if (pesoVolumetrico > 100 && pesoVolumetrico <= 200) {
    costo = 8;
  }
  else if (pesoVolumetrico > 200) {
    costo = 9;
  }
  return costo;
}

function obtener_Porcentaje_Descuento_Cliente(tipoCliente) {
  const descuentos = {
    "Normal": 0,
    "Recurrente":0.005,
    "Antiguo Recurrente": 0.01,
    "Especial":0.015
  };
  return descuentos[tipoCliente] || 0;
}

function calcular_descuento_Cliente(precio_neto, tipo_cliente){
  let porcentaje_descuento_cliente = obtener_Porcentaje_Descuento_Cliente(tipo_cliente);
  return parseFloat((precio_neto*porcentaje_descuento_cliente).toFixed(2));
}

function calcular_descuento_recurrente(precio_neto, categoria, tipo_cliente) {
  let valor=0;
  if ((categoria === "Alimentos" && tipo_cliente =="Recurrente") && precio_neto > 3000) {
    valor= 100;
  }
  return valor;
}

// Nueva función para calcular el descuento de cliente Especial
function calcular_descuento_especial(precio_neto, categoria,tipo_cliente) {
  let valor=0;
  if ((categoria === "Electronicos" && tipo_cliente == "Especial")&& precio_neto > 7000) {
    valor= 200;
  }
  return valor;
}

function validar_datos(cantidad, precio, peso_item){
  let es_correcto = true;
  if(cantidad <= 0 || precio <= 0 || peso_item <= 0 || cantidad == null || precio == null || peso_item == null){
    es_correcto = false;
  }
  return es_correcto;
}

function mostrar(cantidad, precio, cod_estado, categoria, peso_item, tipo_cliente) {
  let mostrar_p = "";
  if (validar_datos(cantidad, precio, peso_item)){  
    let precio_n = obtener_precioNeto(cantidad, precio);
    let pesoVolumetrico = calcular_Peso_Volumetrico(cantidad, peso_item);
    let precio_envio = calcular_Costo_Envio(cantidad, peso_item);

    // Calcula según el estado
    let porcentaje_impuesto_estado = obtener_porcentaje_impuesto_estado(cod_estado);
    let impuesto_estado = calcular_impuesto_estado(precio_n, cod_estado);

    // Calcula según la categoría
    let porcentaje_impuesto_categoria = obtener_Porcentaje_Impuesto_Categoria(categoria);
    let impuesto_categoria = calcular_Impuesto_Categoria(precio_n, categoria);

    let porcentaje_descuento_categoria = obtener_porcentaje_descuento_categoria(categoria);
    let descuento_categoria = calcular_descuento_categoria(precio_n, categoria);

    // Descuento según el precio neto
    let porcentaje_descuento = obtener_porcentaje_descuento(precio_n);
    let descuento = calcular_descuento(precio_n);

    // Descuento según el tipo de cliente
    let porcentaje_descuento_cliente = obtener_Porcentaje_Descuento_Cliente(tipo_cliente);
    let descuento_cliente = calcular_descuento_Cliente(precio_n, tipo_cliente);

    // Descuentos adicionales para clientes Recurrentes y Especiales
    let descuento_recurrente = calcular_descuento_recurrente(precio_n, categoria,tipo_cliente);
    let descuento_especial = calcular_descuento_especial(precio_n, categoria,tipo_cliente);

    let precio_con_impuestos = precio_n + impuesto_estado + impuesto_categoria;
    let precio_total = precio_con_impuestos + precio_envio - descuento - descuento_categoria - descuento_cliente - descuento_recurrente - descuento_especial;

    mostrar_p = `
    La cantidad es: ${cantidad} <br>
    El precio por unidad es: ${precio} <br>
    Categoría del item: ${categoria} <br>
    Código de estado es: ${cod_estado} <br>
    Precio neto del producto: (${cantidad} * $${precio.toFixed(2)}): $${precio_n.toFixed(2)}<br>
    Precio del costo de envio (${pesoVolumetrico}kg.): +$${precio_envio.toFixed(2)}<br>
    Impuesto para ${cod_estado} (${(porcentaje_impuesto_estado * 100).toFixed(2)}%): +$${impuesto_estado.toFixed(2)}<br>
    Impuesto por categoría (${(porcentaje_impuesto_categoria * 100).toFixed(2)}%): +$${impuesto_categoria.toFixed(2)}<br>
    Descuento (${(porcentaje_descuento * 100).toFixed(2)}%): -$${descuento.toFixed(2)}<br>
    Descuento Categoria (${(porcentaje_descuento_categoria * 100).toFixed(2)}%): -$${descuento_categoria.toFixed(2)}<br>
    Descuento por Tipo de Cliente ${tipo_cliente} (${(porcentaje_descuento_cliente * 100).toFixed(2)}%): -$${descuento_cliente.toFixed(2)}<br>
    Descuento adicional para Cliente Recurrente: -$${descuento_recurrente.toFixed(2)}<br>
    Descuento adicional para Cliente Especial: -$${descuento_especial.toFixed(2)}<br>
    Precio total (con descuentos e impuestos): $${precio_total.toFixed(2)}<br>
    `;
  }
  else{
    mostrar_p = "Error: Se ingresaron datos erroneos";
  }
  return mostrar_p;
}
export { obtener_precioNeto, calcular_impuesto_estado, calcular_descuento, mostrar, calcular_Peso_Volumetrico, calcular_descuento_Cliente,calcular_descuento_recurrente, calcular_descuento_especial}