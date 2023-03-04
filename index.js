
function seleccionarAudio (id){
    const audio = window.document.querySelector(`audio[audio-id="${id}"]`)
    audio.currentTime = 0
    audio.play()    
}


function obtenerId (comp){
    const id = comp.id
    seleccionarAudio(id)
    comp.classList.add('playing')
        function removeTransition2(){
            comp.classList.remove('playing')
        }  
    setTimeout(removeTransition2,150)       
}

