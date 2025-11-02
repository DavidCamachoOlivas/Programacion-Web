const KEY = "historial";

export function guardarHistorial(historial) {
  localStorage.setItem(KEY, JSON.stringify(historial));
}

export function obtenerHistorial() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
