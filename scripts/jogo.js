const ulAcertos = $class('jogo-acertos');
const ulErros = $class('jogo-erros');
let palavra = [];
let acertos = [];
let erros = [];
let letras = [];
let teclas = [];
let dica = "";

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

function confirmarTecla(tecla) {
    if(
        !palavra.includes(tecla)  &&
        !erros.includes(tecla)
    ) {
        erros.push(tecla);
        montarDesenhoForca();
    }
    if(erros.length > 4) {
        alert("Fim de jogo");
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
        alert("Você Venceu. Parabéns!");
    }
}

montarDesenhoForca() {
    if(erros.length > 0) {
        var imgBase = create('img');
        var img = "./images/forca-fundacao.svg";
        
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