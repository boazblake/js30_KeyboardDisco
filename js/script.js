const keys = document.querySelectorAll('.key')
const audioArray = document.querySelectorAll('audio')

function addAction(x) {
  const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`) 
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`) 
  if (audio) {
    audio.play(audio.currentTime = 0) && key.classList.add('playing')
  }
}

function touchStart(x) {
  var target = x.target.innerHTML
  // console.log( audioArray.map(x => console.log(x.innerHTML)) )
  audioArray.forEach(
    y => (y.innerHTML === target)?  y.play() :()=>{}
    )
}

function removeAction(e){
  if (e.propertyName === 'transform') {this.classList.remove('playing')}
}


keys.forEach( x => x.addEventListener('transitionend', removeAction))

window.addEventListener('keydown', addAction)
window.addEventListener("touchstart", touchStart, false)