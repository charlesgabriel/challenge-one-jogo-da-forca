const ulAcertos = $class('jogo-acertos');
const ulErros = $class('jogo-erros');
let palavra = [];
let acertos = [];
let erros = [];
let letras = [];
let teclas = [];
let dica = "";

document.body.addEventListener('keypress', function(event) {
    const regex = /[A-Z]/;
    const arrayTecla = regex.exec(event.key);
    if(arrayTecla !== null) {
        const tecla = arrayTecla[0];
        if(teclas.length > 0) {
            for(let i = 0; i < teclas.length; i++) {
                if(!teclas.includes(tecla)) {
                    teclas.push(tecla);
                }
            }
        } else {
            teclas.push(tecla);
        }
        confirmarTecla(tecla);
        limparPalavra();
        montarLi();
    }
});

function confirmarTecla(tecla) {
    if(
        !palavra.includes(tecla)  &&
        !erros.includes(tecla)
    ) {
        erros.push(tecla);
    }
}

function limparPalavra() {
    ulAcertos[0].innerHTML = "";
}

function limparCampos() {
    palavra = [];
    letras = [];
    teclas = [];
    acertos = [];
    erros = [];
    dica = "";
}

function novoJogo() {
    limparCampos();
    limparPalavra();
    
    const palavraDica = palavras[Math.floor(Math.random() * palavras.length)];
    
    palavra = palavraDica[0];
    dica = palavraDica[1];
    
    console.log(palavra);
    montarPalavra(palavra);
    
    montarLi();
}

function montarPalavra(palavra) {
    letras = palavra.split('');
}

function verificarPalavra() {
    acertos = [];
    const li = $class('jogo-letras');
    for(let i = 0; i < li.length; i++) {
        if(li[i].innerText !== "") {
            acertos.push(li[i].innerText);
        }
    }
    if(acertos.length === palavra.length) {
        return true;
    }
    return false
}

function montarLi() {
    letras.forEach(function(letra) {
        var li = create('li');
        li.classList.add('jogo-letras');
        if(teclas.length > 0) {
            teclas.forEach(function(tecla) {
                if(tecla == letra) {
                    li.textContent = letra;
                }
            });
        } else {
            li.textContent = "";
        }
        ulAcertos[0].appendChild(li);
    });
    
    erros.forEach(function(erro) {
        var li = create('li');
        li.classList.add('jogo-erros');
        li.textContext = "erro";
        ulErros[0].appendChild(li);
    });

    const verificar = verificarPalavra();
    
    if(verificar) {
        alert("Você Venceu. Parabéns!");
    }
}

novoJogo();