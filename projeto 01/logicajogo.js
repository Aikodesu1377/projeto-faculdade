//##Lógica Nome##//

let nome = prompt("digite seu nome de personagem:");

// Obtém o elemento HTML com o ID "inputNome"
let alteraNome = document.getElementById("inputNome");

// Atribui o novo conteúdo HTML ao elemento, incluindo o nome do personagem
alteraNome.innerHTML = `<h1>${nome}</h1>`;


//##Lógica Ataque e defesa##//


function atualizarAtaqueDefesa() {
    // Obtém o elemento HTML onde o resultado será exibido 
    let resultadoElementA = document.getElementById("resultado");
    let resultadoElementD = document.getElementById("resultadoD");
    // Obtém o valor do input de Ataque e Defesa
    const valorInput = document.getElementById("valorInput").value;
    const valorMultiplicadorA = parseInt(valorInput);

    const valorInputD = document.getElementById("valorInputD").value;
    const valorMultiplicadorD = parseInt(valorInputD);
    
  
    // Obtém o ID da classe do elemento atual
    const classeId = document.getElementById("classe").getAttribute("data-classe");
  
    // Busca a classe correspondente no array de dados
    const classe = dados.find(classe => classe.classe === classeId);
  
    // Calcula o dano total
    const danoTotal = classe.ataqueCorpo * valorMultiplicadorA;
    const defesaTotal = classe.defesa * valorMultiplicadorD;
  
    // Atualiza o conteúdo do elemento HTML
    resultadoElementA.textContent = `O dano total do ${classe.classe} é: ${danoTotal}`;
    resultadoElementD.textContent = `A defesa total do ${classe.classe} foi: ${defesaTotal}`
  }
// Adiciona um event listener ao botão de calcular em cada HTML
document.getElementById("calcularBotaoA").addEventListener("click", () => {
    // Obtém o valor do input
    const valorInput = document.getElementById("valorInput").value;
  
    // Chama a função para atualizar o ataque
    atualizarAtaque(valorInput);
  }); 
document.getElementById("calcularBotaoD").addEventListener("click", () => {
    // Obtém o valor do input
    const valorInputD = document.getElementById("valorInputD").value;
  
    // Chama a função para atualizar o ataque
    atualizarAtaque(valorInputD);
  });
