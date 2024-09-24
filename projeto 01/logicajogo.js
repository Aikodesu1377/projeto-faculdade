let botaoAtkC = document.getElementById("calcularBotao")
for (let indi = 0; indi < dados.length; indi++)
botaoAtkC.onclick = function calcularAtaque(){
let ataqueC = document.getElementById("valorInput").value;
let resultado = ataqueC * indi.ataqueCorpo;
let resultadoDiv = document.getElementById('resultado');
resultadoDiv.textContent = `O resultado é: ${resultado}`;
}

