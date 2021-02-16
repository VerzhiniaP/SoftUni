function solution(){
    const container = document.querySelector('.container')
container.addEventListener('click', onClick)

function onClick(e){
    if(e.target.tagName == 'BUTTON' && e.target.textContent == 'Add gift'){
        let input = e.target.previousElementSibling
        // let arrList = []
        //  arrList.push(input.value)
        let secondCard = container.children[1].children[1]
        let li = document.createElement('li')
        li.textContent = input.value
        input.value = ''
        li.className = 'gift'
        let sendBtn = document.createElement('button')
        sendBtn.textContent = 'Send'
        let discardBtn = document.createElement('button')
        discardBtn.textContent = 'Discard'
        sendBtn.className = 'sendButton'
        discardBtn.className = 'discardButton'
        li.appendChild(sendBtn)
        li.appendChild(discardBtn)
        secondCard.appendChild(li)
       let arr = Array.from(container.children[1].children[1].children)
       arr.sort((a,b) => a.textContent.localeCompare(b.textContent))
       arr.forEach(e => secondCard.appendChild(e))
    }
    if(e.target.tagName == 'BUTTON' && e.target.textContent == 'Send'){
        let sentGifts = container.children[2].children[1]
        let name = e.target.parentNode.firstChild.textContent
        let li = document.createElement('li')
        li.textContent = name
        li.className = 'gift'
        sentGifts.appendChild(li)
        e.target.parentNode.remove()

    }
    if(e.target.tagName == 'BUTTON' && e.target.textContent == 'Discard'){
        let discardGifts = container.children[3].children[1]
        let name = e.target.parentNode.firstChild.textContent
        let li = document.createElement('li')
        li.textContent = name
        li.className = 'gift'
        discardGifts.appendChild(li)
        e.target.parentNode.remove()
    }
}
}