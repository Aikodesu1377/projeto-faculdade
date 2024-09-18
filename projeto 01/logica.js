

let classes = document.getElementById("define-classe");
for (let i = 0; i < dados.length; i++) { 
  const dado = dados[i];
  const botaoSel = document.createElement("button");

  // Cria um elemento <p> para os detalhes
  const details = document.createElement("p");
  details.innerHTML = `
    <strong>Vida:</strong> ${dado.vida}<br>
    <strong>Ataque corpo a corpo:</strong> ${dado.ataqueCorpo}<br>
    <strong>Magia:</strong> ${dado.ataqueDistancia}
  `;

  // Adiciona o texto da classe ao botão e o elemento <p> como filho
  botaoSel.textContent = dado.classe;
  botaoSel.appendChild(details);

  // Adiciona o evento onclick ao botão
  botaoSel.onclick = function() {
  window.location.href = `classe${i}.html`;
  };

  classes.appendChild(botaoSel);
}

// ####proxima update sistema de vida dos personagens####

