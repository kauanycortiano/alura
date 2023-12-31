function tocasomPom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento nao encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tacla.classList[1];
    const idAudio = '#som_${instrumento}';

    tecla.onclick = function (evento) {
        tocasomPom(idAudio);
    }

    tecla.onkeydown = function (evento){

        console.log(evento.code === 'Space')

        if (evento.code === 'Space') {
            tecla.classList.add('ativa');
        }

        }

        tecla.onkeyuo = function () {
            tecla.classList.remove('ativa');
        }
}