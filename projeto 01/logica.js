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