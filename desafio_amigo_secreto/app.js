//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//ESSE É O MEU 2025

// ir inserindo numa lista


let amigos = [];

function acrescentarNaLista() {
     let amigo = document.getElementById('amigo');


    if (amigo !== "" ) {
        amigos.push(amigo);
    } else{
        alert('O campo não pode ser vazio!');
    }
}








/*
function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let nomeAmigo = InputDeviceInfo.value;
    //console.log(nomeAmigo);

    
}



function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigo = input.value;

    if (nomeAmigo.trim() !== "") {
        let resultado = document.getElementById('resultado');
        let listaAtual = resultado.textContent;
        
        // Adiciona o novo nome à lista de nomes existente
        resultado.textContent = listaAtual ? listaAtual + ", " + nomeAmigo : nomeAmigo;

        // Limpa o campo de texto após adicionar o nome
        input.value = "";
    } else {
        alert("Por favor, digite um nome.");
    }
}



gerado
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value;

    if (nomeAmigo.trim() !== "") {
        const lista = document.getElementById('listaAmigos');
        const itemLista = document.createElement('li');
        itemLista.textContent = nomeAmigo;
        lista.appendChild(itemLista);

        // Limpa o campo de texto após adicionar o nome
        input.value = "";
    } else {
        alert("Por favor, digite um nome.");
    }
}
*/