function attachEvents() {
   
    document.getElementById('submit').addEventListener('click', ()=> {
        const author = document.getElementById('author').value
        const content = document.getElementById('content').value

        sendMessage({author,content})

        document.getElementById('author').value = ''
        document.getElementById('content').value = ''

        getmessage()

    })
    document.getElementById('refresh').addEventListener('click', getmessage)
    getmessage()
    
}
attachEvents();
async function getmessage(){
    const response = await fetch('http://localhost:3030/jsonstore/messenger')
    const data = await response.json()
    const messages = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n')
    document.getElementById('messages').value = messages
}

async function sendMessage(){
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(messages)

    })
    const data = await response.json()
}
