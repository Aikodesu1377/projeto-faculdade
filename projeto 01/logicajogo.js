//##Lógica Nome##//


let nome = prompt ("digite seu nome de personagem:");

// Obtém o elemento HTML com o ID "inputNome"
let alteraNome = document.getElementById("inputNome");

// Atribui o novo conteúdo HTML ao elemento, incluindo o nome do personagem
alteraNome.innerHTML = `<h1>${nome}</h1>`;


//##Lógica Ataque e defesa##//


function calcularAtaque(valorMultiplicador) {
  // Obtém os elementos HTML e os dados da classe
  const resultadoElement = document.getElementById("resultado");
  const classeId = document.getElementById("classe").getAttribute("data-classe");
  const classe = dados.find(classe => classe.classe === classeId);

  // Calcula o dano total
  const danoTotal = classe.ataqueCorpo * valorMultiplicador;

  // Atualiza o conteúdo do elemento HTML
  resultadoElement.textContent = `O dano total de ${nome} ${classe.classe} foi: ${danoTotal}`;
}

function calcularDefesa(valorMultiplicador) {
  // Obtém os elementos HTML e os dados da classe
  const resultadoElement = document.getElementById("resultadoD");
  const classeId = document.getElementById("classe").getAttribute("data-classe");
  const classe = dados.find(classe => classe.classe === classeId);

  // Calcula a defesa total
  const defesaTotal = classe.defesa * valorMultiplicador;

  // Atualiza o conteúdo do elemento HTML
  resultadoElement.textContent = `A defesa total de ${nome} ${classe.classe} foi: ${defesaTotal}`;
}

// Adiciona um event listener ao botão de calcular em cada HTML
document.getElementById("calcularBotaoA").addEventListener("click", () => {
  // Obtém o valor do input
  const valorInput = document.getElementById("valorInput").value;
  // Valida se foi colocado algum valor
  if (valorInput == 0 || valorInput > 18){
    alert("Por favor, insira um número válido.");
  } else {
  // Chama a função para atualizar o ataque
  calcularAtaque(parseInt(valorInput));
  divA.style.display = 'none';
  divD.style.display = 'none';
  }
});

document.getElementById("calcularBotaoD").addEventListener("click", () => {
  // Obtém o valor do input
  const valorInputD = document.getElementById("valorInputD").value;
  // Valida se foi colocado algum valor
  if (valorInputD == 0 || valorInputD > 18) {
  alert("Por favor, insira um número válido.");
  } else {
  // Chama a função para atualizar a defesa
  calcularDefesa(parseInt(valorInputD));
  divA.style.display = 'none';
  divD.style.display = 'none';
  }
});


//##Lógica Vida##//


// Obtém o ID da classe do elemento atual
const classeId = document.getElementById("classe").getAttribute("data-classe");
  
// Busca a classe correspondente no array de dados
const classe = dados.find(classe => classe.classe === classeId);


// Cria contador númerico de vida
let valorVida = document.getElementById("contador-vidas")
let displayVida = document.getElementById("vidas")
valorVida = classe.vida

displayVida.textContent = valorVida

 
//##Criar modo batalha##


const botao = document.getElementById("botabatalhar");
const divA = document.getElementById("minhaDivA");
const divD = document.getElementById("minhaDivD");
document.addEventListener('DOMContentLoaded', () => {
  // Seu código aqui, que será executado quando a página estiver totalmente carregada
  divA.style.display = 'none';
  divD.style.display = 'none';

  // ... outras ações que você deseja realizar ao carregar a página
});

botao.addEventListener('click', () => {
    divA.style.display = 'block';
    divD.style.display = 'block';
    botao.style.display = 'none';
});

///////Proxima atualização 
// - realizar lógica de retirar vida
// - aprimorar adição de nome de personagem(iniciar um novo html para implementação de nome do jogador)
// - limitar input para receber apenas numeros de 1 á 18 sem sinais ou coisas do tipo