import { guardarEnLocalStorage } from "./storage.js";

export const taskInput = document.getElementById("taskInput");
export const addTaskBtn = document.getElementById("addTaskBtn");
export const taskList = document.getElementById("taskList");

export function agregarTareaDOM(tarea, tareas) {
  const li = document.createElement("li");
  li.setAttribute("data-id", tarea.id);

  if (tarea.terminada) li.classList.add("completed");

  li.innerHTML = `
    <label>
      <input type="checkbox" ${tarea.terminada ? "checked" : ""}>
      <span>${tarea.texto}</span>
    </label>
    <button class="delete">Eliminar</button>
  `;

  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", (e) => {
    const id = parseInt(li.getAttribute("data-id"));
    const tarea = tareas.find(t => t.id === id);
    tarea.terminada = e.target.checked;
    if (tarea.terminada) li.classList.add("completed");
    else li.classList.remove("completed");
    guardarEnLocalStorage(tareas);
  });

  const deleteBtn = li.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    const id = parseInt(li.getAttribute("data-id"));
    const index = tareas.findIndex(t => t.id === id);
    tareas.splice(index, 1);
    li.remove();
    guardarEnLocalStorage(tareas);
  });

  taskList.appendChild(li);
}
