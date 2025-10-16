function sumar() {
var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;
var resultado = Number(n1) + Number(n2);
document.getElementById("resultado").innerHTML = resultado;
}


function restar() {
var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;
var resultado = Number(n1) - Number(n2);
document.getElementById("resultado").innerHTML = resultado;
}


function multiplicar() {
var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;
var resultado = Number(n1) * Number(n2);
document.getElementById("resultado").innerHTML = resultado;
}


function dividir() {
var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;
var resultado = Number(n1) / Number(n2);
document.getElementById("resultado").innerHTML = resultado;
}