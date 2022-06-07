const jogoForca = $class('div-jogo-forca');
const ulAcertos = $class('jogo-acertos');
const ulErros = $class('jogo-erros');
const imagemJogoForca = $class('div-jogo-forca');
let palavra = [];
let acertos = [];
let erros = [];
let letras = [];
let teclas = [];
let dica = "";
const imgErros = [
    "./images/jogo-forca-erro-01.svg",
    "./images/jogo-forca-erro-02.svg",
    "./images/jogo-forca-erro-03.svg",
    "./images/jogo-forca-erro-04.svg",
    "./images/jogo-forca-erro-05.svg",
    "./images/jogo-forca-erro-06.svg",
    "./images/jogo-forca-erro-07.svg",
    "./images/jogo-forca-erro-08.svg",
    "./images/jogo-forca-erro-09.svg",
    "./images/jogo-forca-erro-10.svg",
];

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

function montarPalavra(palavra) {
    letras = palavra.split('');
}

document.body.addEventListener('keypress', function(event) {
    let regex = /[A-Z]/;
    let arrayTecla = regex.exec(event.key);
    if(arrayTecla !== null) {
        let tecla = arrayTecla[0];
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

function alertaVitoria() {
    alert("Você Venceu. Parabéns!");
}

function alertaErro() {
    alert("Fim de jogo");
}

function confirmarTecla(tecla) {
    if(
        !palavra.includes(tecla)  &&
        !erros.includes(tecla)
    ) {
        erros.push(tecla);
        montarDesenhoForca();
    }
    if(erros.length > 9) {
        setTimeout(alertaErro, 1000);
    }
}

function verificarPalavra() {
    acertos = [];
    let li = $class('jogo-letras');
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
    
    ulErros[0].innerHTML = "";
    erros.forEach(function(erro) {
        var li = create('li');
        li.classList.add('jogo-letras-erros');
        li.textContent = erro;
        ulErros[0].appendChild(li);
    });

    let verificar = verificarPalavra();
    
    if(verificar) {
        setTimeout(alertaVitoria, 1000);
    }
}

function montarDesenhoForca() {
    if(erros.length > 0) {
        imagemJogoForca[0].innerHTML = "";
        let imagemErro = create('img');
        imagemErro.classList.add('desenho-forca');
        imagemErro.setAttribute('alt', 'Jogo da forca');
        for(let i = 0; i < erros.length; i++) {
            if(erros.length == (i + 1)) {
                imagemErro.setAttribute('src', imgErros[i]);
            }
        }
        imagemJogoForca[0].appendChild(imagemErro);
    }
}

function novoJogo() {
    limparCampos();
    limparPalavra();
    
    let palavraDica = palavras[Math.floor(Math.random() * palavras.length)];
    
    palavra = palavraDica[0];
    dica = palavraDica[1];
    
    console.log(palavra);
    montarPalavra(palavra);
    
    montarLi();
}

novoJogo();