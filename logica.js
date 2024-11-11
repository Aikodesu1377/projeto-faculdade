

let classes = document.getElementById("define-classe");
for (let i = 0; i < dados.length; i++) { 
  const dado = dados[i];
  const botaoSel = document.createElement("button");

  // Cria um elemento <p> para os detalhes
  const details = document.createElement("p");
  details.innerHTML = `
    <strong>Vida:</strong> ${dado.vida}<br>
    <strong>Ataque corpo a corpo:</strong> ${dado.ataqueCorpo}<br>
    <strong>Ataque a distancia:</strong> ${dado.ataqueDistancia}<br>
    <strong>Defesa:</strong> ${dado.defesa}
  `;

  // Adiciona o texto da classe ao botão e o elemento <p> como filho
  botaoSel.textContent = dado.classe;
  botaoSel.appendChild(details);

  // Adiciona o evento onclick ao botão
  botaoSel.onclick = function() {
  window.location.href = `classe${i}.html`;
  };

  // Cria um elemento <img> para a imagem
  const img = document.createElement("img");
  // Define o caminho da imagem com base na classe (ajuste conforme necessário)
  img.src = `imagens/${dado.classe.replace(/ /g, "_")}.png`;
  img.alt = `Imagem de ${dado.classe}`;

  classes.appendChild(botaoSel);
  classes.appendChild(img);
}

