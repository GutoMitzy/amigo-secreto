let listaAmigos = []

function adicionar() { 
    let amigos = document.getElementById('lista-amigos');
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if(listaAmigos.includes(nomeAmigo) || nomeAmigo == '') {
        alert('Nome inválido ou repetido!');
    } else {
        if(amigos.textContent == '') {
            amigos.textContent = nomeAmigo;
        } else {
            amigos.textContent += ', ' + nomeAmigo;
        }

        listaAmigos.push(nomeAmigo);
    }

    document.getElementById('nome-amigo').value = ''
}

function sortear() {
    
    if(listaAmigos.length <= 2) {
        alert('Insira mais pessoas!')
    } else {
        document.getElementById('lista-sorteio').textContent = '';
    embaralha();
    let lugarSorteio = document.getElementById('lista-sorteio');

    for (let indice = 0; indice < listaAmigos.length; indice++) {

        if(indice == listaAmigos.length - 1) {
            lugarSorteio.innerHTML += listaAmigos[indice] + '-->' + listaAmigos[0] + '<br>';
        } else {
            lugarSorteio.innerHTML += listaAmigos[indice] + '-->' + listaAmigos[indice+1] + '<br>';
        }
    }
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    listaAmigos = [];
    document.getElementById('lista-sorteio').textContent = '';
}

function embaralha() {
    for (let i = listaAmigos.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        [listaAmigos[i-1], listaAmigos[indiceAleatorio]] = [listaAmigos[indiceAleatorio], listaAmigos[i-1]];
    }
}