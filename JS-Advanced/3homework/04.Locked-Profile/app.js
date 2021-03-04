async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`
    const main = document.getElementById('main')
    const response = await fetch(url)
    const data = await response.json()
    let profileArr = Object.entries(data)
    for(let line of profileArr){
        const div = document.createElement('div')
        div.className = 'profile'
        let img = document.createElement('img')
        img.className = 'userIcon'
        img.src = "./iconProfile2.png"
        div.appendChild(img)
        let label = document.createElement('label')
        label.textContent = 'Lock'
        div.appendChild(label)
        let input = document.createElement('input')
        input.type = 'radio'
        input.name = 'user1Locked'
        input.value = 'lock'
        input.checked = ''
        div.appendChild(input)
        let label2 = document.createElement('label')
        label2.textContent = 'Unlock'
        div.appendChild(label2)
        let input2 = document.createElement('input')
        input2.type = 'radio'
        input2.name = 'user1Locked'
        input2.value = 'unlock'
        let br = document.createElement('br')
        div.appendChild(input2)
        div.appendChild(br)
        let hr = document.createElement('hr')
        div.appendChild(hr)
        let label3 = document.createElement('label')
        label3.textContent = 'Username'
        div.appendChild(label3)
        let input3 = document.createElement('input')
        input3.type = 'text'
        input3.name = line[1]._id
        input3.value = line[1].username
        input3.disabled = ''
        input3.readonly = ''
        div.appendChild(input3)
        let div2 = document.createElement('div')
        div2.id = 'user1HiddenFields'
        let hr2 = document.createElement('hr')
        div2.appendChild(hr2)
        let label4 = document.createElement('label')
        label4.textContent = 'Email'
        div2.appendChild(label4)
        let input4 = document.createElement('input')
        input4.type = 'email'
        input4.name = 'user1Email'
        input4.value = line[1].email
        input4.disabled = ''
        input4.readonly = ''
        div2.appendChild(input4)
        let label5 = document.createElement('label')
        label5.textContent = 'Age'
        div2.appendChild(label5)
        let input5 =document.createElement('input')
        input5.type = 'email'
        input5.name = 'user1Age'
        input5.value = line[1].age
        input5.disabled = ''
        input5.readonly = ''
        div2.appendChild(input5)
        div.appendChild(div2)
        let btn = document.createElement('button')
        btn.textContent = 'Show more'
        div.appendChild(btn)
        main.appendChild(div)
        

        

    }

   Array.from(document.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', onClick))

   
}
function onClick(e){
    if(e.target.parentNode.children[4].checked == true){
        
     if(e.target.textContent == 'Show more'){
         e.target.parentNode.children[9].style.display = 'block'
          e.target.textContent = 'Hide it'
        }else if(e.target.textContent == 'Hide it'){
            e.target.parentNode.children[9].style.display = 'none'
            e.target.textContent = 'Show more'
        }
    }
    
}