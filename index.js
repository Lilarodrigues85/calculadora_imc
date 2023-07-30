function calcular() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var texto = document.getElementById("resultado");
  var resultado = (peso / (altura * altura));
  var resultadoFinal = resultado.toFixed(1);

  if(resultadoFinal <= 18.5) {
    texto.innerHTML = "Abaixo do peso normal: " + resultadoFinal;
  }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9) {
    texto.innerHTML = "Peso ideal: " + resultadoFinal;
  }else if(resultadoFinal >= 25 && resultadoFinal <= 29.9) {
    texto.innerHTML = "Excesso de Peso: " + resultadoFinal;
  }else if(resultadoFinal >= 30 && resultadoFinal <= 34.9) {
    texto.innerHTML = "Obesidade Grau I: PROCURE UM MÉDICO!  " + resultadoFinal;
  }else if(resultadoFinal >= 35 && resultadoFinal <= 39.9) {
    texto.innerHTML = "Obesidade Grau II: PROCURE UM MÉDICO!  " + resultadoFinal;
  }else {
    texto.innerHTML = "Obesidade Grau III: PROCURE UM MÉDICO! " + resultadoFinal;
  }
}

