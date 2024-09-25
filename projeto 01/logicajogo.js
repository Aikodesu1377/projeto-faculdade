function atualizarAtaque() {
    // Obtém o elemento HTML onde o resultado será exibido
    const resultadoElement = document.getElementById("resultado");
  
    // Obtém o valor do input
    const valorInput = document.getElementById("valorInput").value;
    const valorMultiplicador = parseInt(valorInput);
  
    // Obtém o ID da classe do elemento atual
    const classeId = document.getElementById("classe").getAttribute("data-classe");
  
    // Busca a classe correspondente no array de dados
    const classe = dados.find(classe => classe.classe === classeId);
  
    // Calcula o dano total
    const danoTotal = classe.ataqueCorpo * valorMultiplicador;
  
    // Atualiza o conteúdo do elemento HTML
    resultadoElement.textContent = `O dano total do ${classe.classe} é: ${danoTotal}`;
  }
  // Adiciona um event listener ao botão de calcular em cada HTML
document.getElementById("calcularBotaoA").addEventListener("click", () => {
    // Obtém o valor do input
    const valorInput = document.getElementById("valorInput").value;
  
    // Chama a função para atualizar o ataque
    atualizarAtaque(valorInput);
  });
