// console.log(e.keyCode);

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return;
    audio.currentTime = 1;
    audio.play();
    // console.log(key);
    key.classList.add('playing');
}

function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return; //skip if property name is not transform
    // console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
