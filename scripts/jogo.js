const ul = $class('jogo-erros');
let palavra = '';

document.body.addEventListener('keypress', function(event) {
    console.log(event)
});

function novoJogo() {
    const erros = [];
    
    palavra = palavras[Math.floor(Math.random() * palavras.length)];

    montarLi(palavra[0]);
}

function montarLi(palavra) {
    const letras = palavra.split('');
    letras.forEach(function(letra) {
        var li = create('li');
        li.textContent = letra;
        ul[0].appendChild(li);
    });
}

novoJogo();