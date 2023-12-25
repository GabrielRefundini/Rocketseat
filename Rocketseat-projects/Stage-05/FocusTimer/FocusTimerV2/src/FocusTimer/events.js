import * as el from "./elements.js";
import state from './state.js'

import * as actions from "./actions.js";

export function registerControls(){
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }
        actions[action]()
        
    })
}

//Falta adicionar parar musica ao dar stop
export function selection(){
    el.selections.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        
        if(typeof actions[action] != "function"){
            return
        }
        
    actions[action]()
    })

}