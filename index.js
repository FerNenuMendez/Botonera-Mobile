// window.addEventListener('keydown', function(e){
    
//     const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio) return;
//     audio.currentTime = 0
//     audio.play();
//     key.classList.add('playing');
// })

// function removeTransition(e){
//     if(e.propertyName !== 'transform') return;
//     this.classList.remove('playing')
  
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function seleccionarAudio (id){
    const audio = window.document.querySelector(`audio[audio-id="${id}"]`)
    audio.currentTime = 0
    audio.play()    
}

<<<<<<< HEAD
function obtenerId (comp){
    const id = comp.id
    seleccionarAudio(id)
    comp.classList.add('playing')
        function removeTransition2(){
            comp.classList.remove('playing')
        }  
    setTimeout(removeTransition2,150)       
}
=======
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('click', function(e){
    
    const audio = this.document
    
})
>>>>>>> 61b17d4a9b99c39e0cf2bd13bf6a58ee8bb282bd
