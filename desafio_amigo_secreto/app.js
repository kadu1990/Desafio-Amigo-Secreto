//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//ESSE É O MEU 2025


let amigos = [];

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

        limparCampos();


    }
}




function limparCampos() {
    let limpar = document.getElementById('amigo');
    limpar.value = '';
}