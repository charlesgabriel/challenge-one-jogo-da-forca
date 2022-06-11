const telas = [
  telaInicial,
  telaJogo,
  telaPalavra
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