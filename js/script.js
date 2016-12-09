const keys = document.querySelectorAll('.key')

function addAction(x) {
  const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`) 
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`) 
  if (audio) {audio.play(audio.currentTime = 0) && key.classList.add('playing')}
}

function touchStart(x) {
  const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`) 
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`) 
  if (audio) {audio.play(audio.currentTime = 0) && key.classList.add('playing')}
}

function removeAction(e){
  if (e.propertyName === 'transform') {this.classList.remove('playing')}
}

window.addEventListener('keydown', addAction)

keys.forEach( x => x.addEventListener('transitionend', removeAction))

window.addEventListener("touchstart", touchStart, false);