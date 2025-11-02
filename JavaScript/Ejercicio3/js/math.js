export function calcularExpresion(expresion) {
  try {
    let resultado = eval(expresion);
    if (!isFinite(resultado)) throw "error";
    return resultado;
  } catch {
    return "Error";
  }
}
