function addItem() {
    let ul = document.querySelector('#items')
    let input = document.querySelector('#newItemText').value
    let li = document.createElement('li')
    li.textContent = input
    let btn = document.createElement('a')
    btn.textContent = '[Delete]'
    btn.href="#"
    btn.addEventListener('click', (ev)=> {
        ev.target.parentNode.remove()
    })
    
    li.appendChild(btn)
    ul.appendChild(li)
    input.value = ''
    }
