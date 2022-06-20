function calcularNota() {
  var nota1 = parseInt(document.getElementById("nota1").value)
  var nota2 = parseInt(document.getElementById("nota2").value)
  var nota3 = parseInt(document.getElementById("nota3").value)
  var nota4 = parseInt(document.getElementById("nota4").value)
  var Resultado = document.getElementById("resultado"); Resultado.innerHTML = ""

  var resultado = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  
  if(resultado >= 6 ){
    Resultado.innerHTML = `A média é 6.0 e sua nota foi: ${resultado}<br> Boas férias.` ;
    document.getElementById("resultado").style.color = '#380b61';
  }else{
    Resultado.innerHTML = (`A média é 6 e sua nota foi: ${resultado} <br> Infelizmente não foi dessa vez`)
    document.getElementById("resultado").style.color = '#380b61';
  }
}