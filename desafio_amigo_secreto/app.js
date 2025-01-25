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

        // amigos.getElementById;

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

    //console.log(numeroAleatorio);
    //console.log(amigos[numeroAleatorio]);

    numerosJaSorteados.push(numeroAleatorio);
    //console.log(numerosJaSorteados);

    
    //console.log(quantidadeDeSorteios);

  //  amigos.splice(numerosJaSorteados(numeroAleatorio, 1)[0]);
    //console.log(quantidadeDeSorteios);
    //console.log(amigos[numeroAleatorio]);
    

while (numerosJaSorteados.length < amigos.length) {
    
    gerarNumeroAleatorio();
    
}

console.log(amigos[numeroAleatorio]);

}

function naoPermitirNomeRepetido() {
let set = new Set(amigos);

if (set.size !== amigos.length) {
  alert('Nome repetido! Vamos recomeçar');
  limparCampos();
  window.location.reload(true);

} 

}

