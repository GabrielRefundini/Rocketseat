import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'

export function start() {
    if(state.isRunning == true){
        alert('Timer ja esta rodando')
        return
    }
    state.isRunning = true
    timer.countdown()
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function plusTime(){
    let plusTime = 5;
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes = minutes + plusTime;
    timer.updateDisplay(minutes, seconds)
}

export function minusTime(){
    let minusTime = 5;
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    if(minutes > 5){
        minutes = minutes - minusTime;
        timer.updateDisplay(minutes, seconds)
    }else{
        alert('Tempo menor do que 5 minutos, impossivel subtrair 5 minutos')
    }
}



var isPlaying = false;
function togglePlay(){
    isPlaying ? this.pause() : this.play();
}


export function playRain(){
    let elemento = document.querySelectorAll('[data-action="playRain"]')[0];
    elemento.classList.toggle("current")
    function togglePlay(){
        if(isPlaying){
            sounds.rain.pause()
            isPlaying = false
        }else{
            sounds.rain.play();
            isPlaying = true;
        } 
            
    }
    togglePlay()
}

export function playForest(){
    let elemento = document.querySelectorAll('[data-action="playForest"]')[0];
    elemento.classList.toggle("current")
    function togglePlay(){
        if(isPlaying){
            sounds.forest.pause()
            isPlaying = false
        }else{
            sounds.forest.play();
            isPlaying = true;
        } 
            
    }
    togglePlay()
}

export function playFireplace(){
    let elemento = document.querySelectorAll('[data-action="playFireplace"]')[0];
    elemento.classList.toggle("current")
    function togglePlay(){
        if(isPlaying){
            sounds.fireplace.pause()
            isPlaying = false
        }else{
            sounds.fireplace.play();
            isPlaying = true;
        } 
            
    }
    togglePlay()
}

export function playCoffeshop(){
    let elemento = document.querySelectorAll('[data-action="playCoffeshop"]')[0];
    elemento.classList.toggle("current")
    function togglePlay(){
        if(isPlaying){
            sounds.coffeshop.pause()
            isPlaying = false
        }else{
            sounds.coffeshop.play();
            isPlaying = true;
        } 
            
    }
    togglePlay()
}
