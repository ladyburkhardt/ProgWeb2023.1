const botao = document.getElementById("dado");

function dadinho() {
  var resultado = Math.floor(Math.random() * 6) + 1;
  document.getElementById("lado").innerHTML = resultado;
  }

  botao.onclick=dadinho;