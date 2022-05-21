const $app = $id('app');

function render() {
  $app.innerHTML = escolherTela();
}

function escolherTela() {
  return telas[0];
}

render();