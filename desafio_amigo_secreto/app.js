//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//ESSE É O MEU 2025

//Declarando as variáveis e listas como vazias;
let listaAmigos = [];
let numerosJaSorteados = [];
let numeroAleatorio = null;


//função para realizar o cadastro do nome quando clicado em adicionar amigo
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    //se o campo do nome estiver vazio vai exibir um alerta
    if (amigo === '') {
        alert('Por favor, insira um nome');
    }
    else {
        //vai inserindo os nomes dentro da lista
        listaAmigos.push(amigo);

        //vai exibindo os nomes da lista
        listarNomesNaTela();

        //valida se o nome não está repetido
        naoPermitirNomeRepetido();

        //limpa os campos
        limparCampos();
    }
}


//função para quando clicar no botão de sortear
function sortearAmigo() {

    //verifica se a lista já está vazia
    if (listaAmigos.length === 0) {
        //se já estiver vazia vai reiniciar o programa chamando a função
        reiniciar();
    }

    //chama a função para gerar um número aleatório
    gerarNumeroAleatorio();
    //chama a função para exbir o nome do sorteado do momento
    exibirSorteado();
    //chama a função que acrescenta o número do índice do que já foi sorteado para não repetir
    acrescentarNumerosJaSorteados();
    //chama a função para remover o que já foi sorteado da lista de amigos
    removerJaSorteado();
    
}


//funções separadas


//função para gerar um número aleatório do tamanho da lista de nomes inseridos;
function gerarNumeroAleatorio() {

    numeroAleatorio = parseInt(Math.random() * listaAmigos.length);
//enquanto o número aleatório for maior ou igual ao número da lista de amigos, ele continuará gerando o número aleatório
    while (numeroAleatorio >= listaAmigos.length) {
        numeroAleatorio = parseInt(Math.random() * listaAmigos.length);
    }
}


//função para acrescentar os número que já foram sorteados na lista
function acrescentarNumerosJaSorteados() {
    numerosJaSorteados.push(numeroAleatorio);
}


//função para remover quem já foi sorteado
function removerJaSorteado() {

    let indiceParaRemover = numeroAleatorio;
    listaAmigos.splice(indiceParaRemover, 1);

    if (listaAmigos.length > 0) {
        gerarNumeroAleatorio();
    }
}


//função para exibir o nome que foi sorteado
function exibirSorteado() {

    nomeDaVez = document.querySelector('#resultado');
    nomeDaVez.innerHTML = 'O nome sorteado é: ' + listaAmigos[numeroAleatorio];
}


//função para não permitir nome repetido
function naoPermitirNomeRepetido() {
    let set = new Set(listaAmigos);

    if (set.size !== listaAmigos.length) {
        alert('Nome repetido! Vamos recomeçar');
        zerarCampos();        
    }
}


//função para limpar os campos
function limparCampos() {
    document.getElementById('amigo').value = '';
    nomeDaVez.innerHTML = '';

    let nomeDaVez = document.querySelector('#resultado');
    nomeDaVez.innerHTML = '';

    let nomeInserido = document.querySelector('#listaAmigos');
    nomeInserido.innerHTML = '';
}


//função para listar os nomes na tela quando inseridos
function listarNomesNaTela() {
    nomeInserido = document.querySelector('#listaAmigos');
    nomeInserido.innerHTML = listaAmigos.join(', ');
}


//função de reiniciar quando terminado todos os nomes da lista
function reiniciar() {
    alert('Sorteio Finalizado! Boa Diversão!')
   zerarCampos();
    limparCampos();   
}


//função para zerar os campos
function zerarCampos() {
    listaAmigos = [];
    numerosJaSorteados = [];
    numeroAleatorio = null;
    listarNomesNaTela();
    document.querySelector('#resultado').innerHTML = '';
}