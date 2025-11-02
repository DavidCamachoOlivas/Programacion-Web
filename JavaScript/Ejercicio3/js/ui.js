export let pantalla = document.getElementById("pantalla");
export let lista = document.getElementById("lista");

export function actualizarPantalla(valor) {
  pantalla.value = valor;
}

export function agregarAlHistorial(expresion, resultado) {
  lista.innerHTML += `${expresion} = ${resultado}<br>`;
}
