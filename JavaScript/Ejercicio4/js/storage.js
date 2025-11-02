const KEY = "tareas";

export function guardarEnLocalStorage(tareas) {
  localStorage.setItem(KEY, JSON.stringify(tareas));
}

export function obtenerDeLocalStorage() {
  const datos = localStorage.getItem(KEY);
  return datos ? JSON.parse(datos) : [];
}
