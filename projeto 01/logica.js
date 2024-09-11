
let classes = document.getElementById("define-classe");
for (let i = 0; i < dados.length; i++) {
  const dado = dados[i];
  const button = document.createElement("button");
  button.textContent = dado.classe;

  // Adiciona o evento onclick ao botão, ajustando o caminho para o arquivo
  button.onclick = function() {
    window.location.href = `classe${i}.html`; // Assumindo que os arquivos estão na mesma pasta
  };

  classes.appendChild(button);
}

