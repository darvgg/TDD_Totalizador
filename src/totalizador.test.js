import { precioNeto, calcular_impuesto_estado,calcular_descuento} from "./totalizador.js";

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
  it("Muestra el descuento correspondiente a 3000$",()=>{
    expect(calcular_descuento(7000)).toEqual(490);
  });
});