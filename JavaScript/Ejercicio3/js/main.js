import { pantalla, actualizarPantalla, agregarAlHistorial } from "./ui.js";
import { calcularExpresion } from "./math.js";
import { guardarHistorial, obtenerHistorial } from "./storage.js";

let expresion = "";
let historial = obtenerHistorial();
let lista = document.getElementById("lista");

historial.forEach(item => {
  lista.innerHTML += `${item}<br>`;
});

window.presionar = function (valor) {
  expresion += valor;
  actualizarPantalla(expresion);
};

window.borrar = function () {
  expresion = "";
  actualizarPantalla("");
};

window.calcular = function () {
  let resultado = calcularExpresion(expresion);
  if (resultado === "Error") {
    actualizarPantalla("Error");
    expresion = "";
    return;
  }

  agregarAlHistorial(expresion, resultado);
  historial.push(`${expresion}=${resultado}`);
  guardarHistorial(historial);
  actualizarPantalla(resultado);
  expresion = resultado.toString();
};

document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    window.presionar(e.key);
  } else if (e.key === "Enter") {
    window.calcular();
  } else if (e.key === "c" || e.key === "C") {
    window.borrar();
  }
});
