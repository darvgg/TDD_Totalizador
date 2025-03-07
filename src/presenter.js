import { mostrar} from "./totalizador";

const cant_item = document.querySelector("#primer-numero");
const precio_item = document.querySelector("#segundo-numero");
const peso_item = document.querySelector("#tercer-numero");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estado_select = document.querySelector("#estados-Select")
const categoria_select = document.querySelector("#categoria-Select");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItem = Number.parseFloat(cant_item.value);
  const precioItem = Number.parseFloat(precio_item.value);
  const cod_estado = estado_select.value;
  const categoria = categoria_select.value;
  const pesoItem = Number.parseFloat(peso_item.value);

  div.innerHTML = "<p>" + mostrar(cantItem, precioItem, cod_estado, categoria, pesoItem) + "</p>";
});