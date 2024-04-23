function tocarSom(ElementoAudio){
    const elemento = document.querySelector(ElementoAudio)

    if(elemento && elemento.localName === 'audio'){
        elemento.play()
        } else {
                console.log("VALOR NÃO ENCONTRADO")
            }
}


const listaDeTeclas = document.querySelectorAll('.tecla')

for(contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
 
    tecla.onclick = () =>{
        tocarSom(idAudio)
    }
    tecla.onkeydown = function(evento){

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function(evento){

        if (evento.code === 'Enter' || 'Space'){
            tecla.classList.remove('ativa')
        }
    }
}
