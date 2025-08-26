let amigos = [];

function adicionarAmigo(){
    let campo = document.getElementById("amigo");
    let amigo = campo.value;

    if(!amigo || amigo.trim() === ""){
       alert("Por favor, insira um nome");
        return;
    }

    amigos.push(amigo);

   atualizarlista();

    campo.value = " ";
}

function atualizarlista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = " ";

   for(let i = 0; i < amigos.length; i++){
        let amigo = document.createElement("li");
        amigo.textContent = amigos[i];
        lista.appendChild(amigo);
    }
}

function sortearAmigo(){
    if(amigos == 0){
        alert("Nenhum amigo adicionado para sortear");
        return;
    }

    let resultado = document.getElementById("resultado");
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}