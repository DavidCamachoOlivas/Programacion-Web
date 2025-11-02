export function crearTarea(texto) {
  return {
    id: Date.now(),
    texto: texto.trim(),
    terminada: false
  };
}

export function validarTexto(texto) {
  return texto.trim() !== "";
}
