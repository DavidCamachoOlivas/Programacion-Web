import { taskInput, addTaskBtn, agregarTareaDOM } from "./ui.js";
import { guardarEnLocalStorage, obtenerDeLocalStorage } from "./storage.js";
import { crearTarea, validarTexto } from "./tasks.js";

let tareas = obtenerDeLocalStorage();

window.addEventListener("load", () => {
  tareas.forEach(t => agregarTareaDOM(t, tareas));
});

function agregarTarea() {
  const texto = taskInput.value;
  if (!validarTexto(texto)) return;

  const nuevaTarea = crearTarea(texto);
  tareas.push(nuevaTarea);
  agregarTareaDOM(nuevaTarea, tareas);
  guardarEnLocalStorage(tareas);
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", agregarTarea);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") agregarTarea();
});
