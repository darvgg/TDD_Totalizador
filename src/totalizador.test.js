import { precioNeto, calcular_impuesto_estado } from "./totalizador.js";

describe("Mostrara el precio neto del producto", () => {
  it("Muestra la cantidad del producto ingresado", () => {
    expect(precioNeto(7,5)).toEqual(35);
  });
});

describe("Mostrara el impuesto segun el estado", () => {
  it("Muestra el impuesto segun el estado de CA", () => {
    expect(calcular_impuesto_estado(10,"CA")).toEqual(0.83);
  });
  it("Muestra el impuesto segun el estado de AL", () => {
    expect(calcular_impuesto_estado(10,"AL")).toEqual(0.4);
  });
});