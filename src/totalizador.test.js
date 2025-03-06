import { precioNeto } from "./totalizador.js";

describe("Mostrara el precio neto del producto", () => {
  it("Muestra la cantidad del producto ingresado", () => {
    expect(precioNeto(7,5)).toEqual(35);
  });
});


