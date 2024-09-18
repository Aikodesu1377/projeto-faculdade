let botaoAtkC = document.getElementById("calcularBotao")
botaoAtkC.onclick = function calcularAtaque(){
let ataqueC = document.getElementById("valorInput").value;
let resultado = ataqueC * dados[0].ataqueCorpo;
alert(resultado)
window.location.href = `classe${i}.html`
}
