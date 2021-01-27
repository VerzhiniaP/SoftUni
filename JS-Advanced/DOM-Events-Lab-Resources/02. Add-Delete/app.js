function addItem() {
    let list = document.getElementById('items')
    let input = document.getElementById('newText').value
    let newLi =  document.createElement('li')
    newLi.textContent = input
    let button = document.createElement('a')
    button.textContent = '[Delete]'
    button.href = '#'
    button.addEventListener('click', (event)=> {
        event.target.parentNode.remove()
    })
    newLi.appendChild(button)
    list.appendChild(newLi)
    input.value = ''

}