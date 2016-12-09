const keys = document.querySelectorAll('.key')

const addEventListeners = (function(){
 if (document.addEventListener){
    return function listener(el, evt, handler) {
      el.addEventListener(evt, handler)
    }
  }
  else {
    return function(el, evt, handler){
      el.addEventListener('on'+event, handler )
    }
  }
}())


function keypress(x) {
  const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`) 
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`) 
  if (audio) {audio.play(audio.currentTime = 0) && key.classList.add('playing')}
}

function mousepress(x) {
  document.querySelector('.container').innerHTML = "x.target"
  console.log(x.target)
  const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`) 
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`) 
  if (audio) {audio.play(audio.currentTime = 0) && key.classList.add('playing')}
}

function touchpress(x) {
  document.querySelector('.container').innerHTML = x
  console.log(x.target)
  const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`) 
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`) 
  if (audio) {audio.play(audio.currentTime = 0) && key.classList.add('playing')}
}

function removeAction(e){
  if (e.propertyName === 'transform') {this.classList.remove('playing')}
}

addEventListeners(window, 'keydown', keypress)
addEventListeners(window, 'click', mousepress)
addEventListeners(window, 'touch', touchpress)
// window.addEventListener('keydown', keypress)

keys.forEach( x => x.addEventListener('transitionend', removeAction))