const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } 
    
    else {
        alert('Elemento ou seletor não encontrado.');
    }

}

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocarSom(idAudio);
    }
    
    tecla.onkeydown = function (evento){

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
            tecla.classList.remove('ativa')
    }
}
