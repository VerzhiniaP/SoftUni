function encodeAndDecodeMessages() {
    const textarea = document.querySelectorAll('textarea')
    const buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', (e) => {
        let message = textarea[0].value.split('')
        let newMessage = []
        for(let i = 0 ; i < message.length ; i++){
            let num = (message[i].charCodeAt()) + 1
            let newLetter =String.fromCharCode(num)
            newMessage.push(newLetter)
           }
           textarea[1].value = newMessage.join('')
           textarea[0].value = ''
    })
    buttons[1].addEventListener('click' , (e) => {
        let message = textarea[1].value.split('')
        let newMessage = []
        for(let i = 0 ; i < message.length ; i++){
            let num = (message[i].charCodeAt()) - 1
            let newLetter =String.fromCharCode(num)
            newMessage.push(newLetter)
           }
           textarea[1].value = newMessage.join('')
    })
}