//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//ESSE É O MEU 2025


let amigos = [];
let numerosJaSorteados = [];


function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert('Por favor, insira um nome');
    }
    else {
        amigos.push(amigo);
        let quantidadeDeNomes = amigos.length;
        console.log(quantidadeDeNomes);
        console.log(amigos);

      
        naoPermitirNomeRepetido();

        limparCampos();



    }
}

function limparCampos() {
    let limpar = document.getElementById('amigo');
    limpar.value = '';
}


function listarNomesNaTela() {

}

function sortearAmigo() {


    gerarNumeroAleatorio();

}

function reiniciar() {
    amigos = [];
}





function gerarNumeroAleatorio() {

    let numeroAleatorio = parseInt(Math.random() * amigos.length);

    while (numeroAleatorio >= amigos.length) {
        numeroAleatorio = parseInt(Math.random() * amigos.length);
    }

    

    numerosJaSorteados.push(numeroAleatorio);
    console.log(amigos[numeroAleatorio]);

let indiceParaRemover = numeroAleatorio;
amigos.splice(indiceParaRemover, 1);



if (amigos.length > 0) {
    gerarNumeroAleatorio();
}

}

 

function naoPermitirNomeRepetido() {
    let set = new Set(amigos);

    if (set.size !== amigos.length) {
        alert('Nome repetido! Vamos recomeçar');
        limparCampos();
        window.location.reload(true);

    }

}

