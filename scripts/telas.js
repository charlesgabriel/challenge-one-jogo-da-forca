const telas = [
  `
    <div class="div-botoes-iniciais">
      <button class="botao botao-preenchido" onclick="iniciarJogo()">
        <p class="texto-botao-comecar">
          Começar a jogar
        </p>
      </button>
      <button class="botao botao-vazado" onclick="adicionarPalavra()">
        <p class="texto-botao-adicionar">
          Adicionar nova palavra
        </p>
      </button>
    </div>
  `,
  `
  <div class="div-jogo">
    <div class="div-jogo-forca">

    </div>
    <div class="div-jogo-letras">

    </div>
    <div class="div-botoes">
      <button class="botao espacamento">
        Novo jogo
      </button>
      <button class="botao" onclick="voltarTela()">
        Desistir
      </button>

    </div>
  </div>
  `,
  `
    hello word
    <button class="botao" onclick="voltarTela()">Voltar</button>

  `
];

const estado = {
  tela: telas[0],
  telaAnterior: telas[0]
};

function alterarTela(pos) {
  estado.telaAnterior = estado.tela;
  estado.tela = telas[pos];
}

function voltarTela() {
  const idTela = telas.findIndex((tela) => tela === estado.telaAnterior);
  alterarTela(idTela);
  renderizarTela();
}

function iniciarJogo() {
  alterarTela(1);
  renderizarTela();
}

function adicionarPalavra() {
  alterarTela(2);
  novoJogo();
  renderizarTela();
}

function chamarTela() {
  return estado.tela;
}

function chamar() {
  console.log("clique");
}

function novoJogo() {
  jogar();
}