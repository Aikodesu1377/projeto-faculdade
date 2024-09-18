let classes = document.getElementById("define-classe");
for (let i = 0; i < dados.length; i++) {
  const dado = dados[i];
  const button = document.createElement("button");

  // Cria um elemento <p> para os detalhes
  const details = document.createElement("p");
  details.innerHTML = `
    <strong>Vida:</strong> ${dado.vida}<br>
    <strong>Ataque corpo a corpo:</strong> ${dado.ataqueCorpo}<br>
    <strong>Magia:</strong> ${dado.ataqueDistancia}
  `;

  // Adiciona o texto da classe ao botão e o elemento <p> como filho
  button.textContent = dado.classe;
  button.appendChild(details);

  // Adiciona o evento onclick ao botão
  button.onclick = function() {
  window.location.href = `classe${i}.html`;
  };

  classes.appendChild(button);
}

// ####proxima update sistema de vida dos personagens####

const valorSistema = 10;

// Obtendo elementos
const valorInput = document.getElementById('valorInput');
const calcularBotao = document.getElementById('calcularBotao');
const resultadoDiv = document.getElementById('resultado');

// Adicionando evento de clique ao botão
calcularBotao.addEventListener('click', () => {
    // Obtendo o valor inserido pelo usuário
    const valorUsuario = parseInt(valorInput.value);

    // Verificando se o valor é um número
    if (!isNaN(valorUsuario)) {
        // Realizando o cálculo
        const resultado = valorUsuario * valorSistema;

        // Exibindo o resultado na página
        resultadoDiv.textContent = `Resultado: ${resultado}`;
    } else {
        resultadoDiv.textContent = "Por favor, insira um número válido.";
    }
});