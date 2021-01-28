function attachEventsListeners(){

    let div = Array.from(document.querySelectorAll('div'))
    for(let i = 0 ; i < div.length ; i++){
        let button = div[i].children[2].addEventListener('click', onClick)
        }

    function onClick(e){
        let parent = e.target.parentNode
        let inputField = parent.children[1]
        let daysInput = parent.parentNode.children[1].children[1]
        let hoursInput = parent.parentNode.children[2].children[1]
        let minutesInput = parent.parentNode.children[3].children[1]
        let secondsInput = parent.parentNode.children[4].children[1]
        if(e.target.id == 'daysBtn'){
           hoursInput.value = inputField.value * 24
           minutesInput.value = hoursInput.value * 60
           secondsInput.value = minutesInput.value * 60
        }else if(e.target.id == 'hoursBtn'){
            daysInput.value = inputField.value / 24
            minutesInput.value = inputField.value * 60
            secondsInput.value = minutesInput.value * 60
        }else if(e.target.id == 'minutesBtn'){
           daysInput.value = minutesInput.value / 1440
           hoursInput.value = minutesInput.value / 60
           secondsInput.value = minutesInput.value * 60
        }else if(e.target.id == 'secondsBtn'){
           daysInput.value = secondsInput.value / 86400
           hoursInput.value = secondsInput.value / 1440
           minutesInput.value = secondsInput.value / 60
        }
    }
    
  
}
