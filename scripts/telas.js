const telas = [
  `
    <div class="div-botoes-iniciais">
      <button class="botao botao-jogar" onclick="iniciarJogo()">
        <p class="texto-botao-comecar">
          Começar a jogar
        </p>
      </button>
      <button class="botao botao-adicionar" onclick="adicionarPalavra()">
        <p class="texto-botao-adicionar">
          Adicionar nova palavra
        </p>
      </button>
    </div>
  `,
  `
    <button class="botao" onclick="chamar()">Teste</button>
  `,
  `
    hello word
  `
];

const estado = {
  tela: telas[0]
};

function iniciarJogo() {
  estado.tela = telas[1];
  renderizarTela();
}

function adicionarPalavra() {
  estado.tela = telas[2];
  renderizarTela();
}

function chamarTela() {
  return estado.tela;
}

function chamar() {
  console.log("clique");
}