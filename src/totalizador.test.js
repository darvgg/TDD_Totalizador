import { mostrar, obtener_precioNeto, calcular_impuesto_estado,calcular_descuento, calcular_Peso_Volumetrico, calcular_descuento_Cliente} from "./totalizador.js";

describe("Calculara el precio neto del producto", () => {
  it("Calcula la cantidad del producto ingresado", () => {
    expect(obtener_precioNeto(7,5)).toEqual(35);
  });
});

describe("Mostrara el impuesto segun el estado", () => {
  it("Muestra el impuesto segun el estado de CA", () => {
    expect(calcular_impuesto_estado(10,"CA")).toEqual(0.83);
  });
  it("Muestra el impuesto segun el estado de AL", () => {
    expect(calcular_impuesto_estado(10,"AL")).toEqual(0.4);
  });
  it("Muestra el impuesto segun el estado de NV", () => {
    expect(calcular_impuesto_estado(10,"NV")).toEqual(0.8);
  });
  it("Muestra el impuesto segun el estado de UT", () => {
    expect(calcular_impuesto_estado(10,"UT")).toEqual(0.67);
  });
  it("Muestra el impuesto segun el estado de TX", () => {
    expect(calcular_impuesto_estado(10,"TX")).toEqual(0.63);
  });
});

describe ("Mostrar el descuento segun el precio neto",()=>{
  it("Muestra el descuento correspondiente a 1000$",()=>{
    expect(calcular_descuento(1000)).toEqual(30);
  });
  it("Muestra el descuento correspondiente a 3000$",()=>{
    expect(calcular_descuento(3000)).toEqual(150);
  });
  it("Muestra el descuento correspondiente a 7000$",()=>{
    expect(calcular_descuento(7000)).toEqual(490);
  });
  it("Muestra el descuento correspondiente a 10000$",()=>{
    expect(calcular_descuento(10000)).toEqual(1000);
  });
  it("Muestra el descuento correspondiente a 30000$",()=>{
    expect(calcular_descuento(30000)).toEqual(4500);
  });
});

describe("Calcula el impuesto en en las categorías", () => {
  it("Categoria Alimentos", () => {
    const resultado1 = mostrar(10, 5, "CA", "Alimentos");
    expect(resultado1).toContain("Impuesto por categoría (0.00%): +$0");
  });
  it("Categoria Bebidas Alcoholicas", () => {
    const resultado1 = mostrar(20, 5, "AL", "Bebidas Alcoholicas");
    expect(resultado1).toContain("Impuesto por categoría (7.00%): +$7");
  });
  it("Categoria Material Escritorio", () => {
    const resultado1 = mostrar(30, 7, "NV", "Material Escritorio");
    expect(resultado1).toContain("Impuesto por categoría (0.00%): +$0");
  });
  it("Categoria Muebles", () => {
    const resultado1 = mostrar(35, 600, "UT", "Muebles");
    expect(resultado1).toContain("Impuesto por categoría (3.00%): +$630");
  });
  it("Categoria Electronicos", () => {
    const resultado1 = mostrar(5, 1090, "TX", "Electronicos");
    expect(resultado1).toContain("Impuesto por categoría (4.00%): +$218");
  });
  it("Categoria Vestimenta", () => {
    const resultado1 = mostrar(120, 90, "TX", "Vestimenta");
    expect(resultado1).toContain("Impuesto por categoría (2.00%): +$216");
  });
  it("Categoria Varios", () => {
    const resultado1 = mostrar(140, 64.50, "UT", "Varios");
    expect(resultado1).toContain("Impuesto por categoría (0.00%): +$0");
  });
});

describe("Calcula el Descuento en en las categorías", () => {
  it("Categoria Alimentos", () => {
    const resultado1 = mostrar(10, 5, "CA", "Alimentos");
    expect(resultado1).toContain("Descuento Categoria (2.00%): -$1");
  });
  it("Categoria Bebidas Alcoholicas", () => {
    const resultado1 = mostrar(20, 5, "AL", "Bebidas Alcoholicas");
    expect(resultado1).toContain("Descuento Categoria (0.00%): -$0");
  });
  it("Categoria Material Escritorio", () => {
    const resultado1 = mostrar(30, 7, "NV", "Material Escritorio");
    expect(resultado1).toContain("Descuento Categoria (1.50%): -$3.15");
  });
  it("Categoria Muebles", () => {
    const resultado1 = mostrar(35, 600, "UT", "Muebles");
    expect(resultado1).toContain("Descuento Categoria (0.00%): -$0");
  });
  it("Categoria Electronicos", () => {
    const resultado1 = mostrar(5, 1090, "TX", "Electronicos");
    expect(resultado1).toContain("Descuento Categoria (1.00%): -$54.5");
  });
  it("Categoria Vestimenta", () => {
    const resultado1 = mostrar(120, 90, "TX", "Vestimenta");
    expect(resultado1).toContain("Descuento Categoria (0.00%): -$0");
  });
  it("Categoria Varios", () => {
    const resultado1 = mostrar(140, 64.50, "UT", "Varios");
    expect(resultado1).toContain("Descuento Categoria (0.00%): -$0");
  });
});

describe("Calculara el peso volumetrico del envio", () => {
  it("Calcula el peso volumetrico del envio", () => {
    expect(calcular_Peso_Volumetrico(7,5)).toEqual(35);
  });
});

describe("Mostrara el costo del envio", () => {
  it("Peso entre 0 a 10 kilos", () => {
    const resultado1 = mostrar(10, 5, "CA", "Alimentos", 0.15);
    expect(resultado1).toContain("Precio del costo de envio (1.5kg.): +$0");
  });  
  it("Peso entre 11 a 20 kilos", () => {
    const resultado1 = mostrar(100, 15, "TX", "Bebidas Alcoholicas", 0.2);
    expect(resultado1).toContain("Precio del costo de envio (20kg.): +$3.5");
  });
  it("Peso entre 21 a 40 kilos", () => {
    const resultado1 = mostrar(4, 8, "TX", "Varios", 8.1);
    expect(resultado1).toContain("Precio del costo de envio (32.4kg.): +$5");
  });
  it("Peso entre 41 a 80 kilos", () => {
    const resultado1 = mostrar(1, 260, "TX", "Varios", 61.4);
    expect(resultado1).toContain("Precio del costo de envio (61.4kg.): +$6");
  });
  it("Peso entre 80 a 100 kilos", () => {
    const resultado1 = mostrar(6, 11.60, "TX", "Varios", 20.5);
    expect(resultado1).toContain("Precio del costo de envio (123kg.): +$8");
  });
  it("Peso entre 101 a 200 kilos", () => {
    const resultado1 = mostrar(6, 11.60, "TX", "Varios", 20.5);
    expect(resultado1).toContain("Precio del costo de envio (123kg.): +$8");
  });
  it("Peso mas de 200 kilos", () => {
    const resultado1 = mostrar(4, 270, "TX", "Electronico", 62.8);
    expect(resultado1).toContain("Precio del costo de envio (251.2kg.): +$9");
  });
});

describe("Calculara descuento por el tipo de cliente", () => {
  it("Calcula el descuento por el tipo de Cliente Normal", () => {
    expect(calcular_descuento_Cliente(160,"Normal")).toEqual(0);
  });
  it("Calcula el descuento por el tipo de Cliente Recurrente", () => {
    expect(calcular_descuento_Cliente(160,"Recurrente")).toEqual(0.8);
  });
  it("Calcula el descuento por el tipo de Cliente Antiguo Recurrente", () => {
    expect(calcular_descuento_Cliente(260,"Antiguo Recurrente")).toEqual(2.6);
  });
});