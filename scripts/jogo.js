const ul = $class('jogo-erros');
let palavra = [];
let letras = [];
let teclas = [];

document.body.addEventListener('keypress', function(event) {
    const tecla = event.key;
    teclas.push(tecla);
    limparCampos();
    compararLetras(tecla);
});

function limparCampos() {
    ul[0].textContent = "";
}

function novoJogo() {
    const erros = [];
    
    palavra = palavras[Math.floor(Math.random() * palavras.length)];

    console.log(palavra);
    montarPalavra(palavra[0]);

    montarLi(letras);
}

function compararLetras(tecla) {
    if(palavra[0].includes(tecla)) {
        montarLi(letras);
    }
}

function montarPalavra(palavra) {
    letras = palavra.split('');
}

function montarLi(letras) {
    letras.forEach(function(letra) {
        var li = create('li');
        li.classList.add("jogo-letras");
        if(teclas.length > 0) {
            teclas.forEach(function(tecla) {
                if(tecla == letra) {
                    li.textContent = letra;
                }
            });
        } else {
            li.textContent = "";
        }
        ul[0].appendChild(li);
    });
}

novoJogo();