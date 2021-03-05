function attachEvents() {
document.getElementById('btnLoad').addEventListener('click', onLoad)
  document.getElementById('btnCreate').addEventListener('click', ()=> {

    let person = document.getElementById('person').value
    let phone = document.getElementById('phone').value
    postLi(person,phone)
    createLi(person,phone)
    document.getElementById('person').value = ''
    document.getElementById('phone').value = ''
    
  })
}

attachEvents();

function createLi(person,phone,id){
    const ul = document.getElementById('phonebook')
    let li = document.createElement('li')
    li.textContent = `${person}:${phone}`
    li.id = id
    const btn = document.createElement('button')
    btn.innerHTML = 'Delete'
    btn.addEventListener('click', (e)=>{
    let id = e.target.parentNode.id
    deletePost(id)
    e.target.parentNode.remove()
    })
    li.appendChild(btn)
    ul.appendChild(li)
   }
async function onLoad(){
    const url = 'http://localhost:3030/jsonstore/phonebook'

    const responce = await fetch(url)
    const data = await responce.json()
    Object.entries(data).forEach(x => {
         let id = x[0]
        let person = x[1].person
        let phone = x[1].phone
         createLi(person,phone,id)
        })   
}
async function postLi(person,phone){
    const responce = await fetch('http://localhost:3030/jsonstore/phonebook',{
        method: 'post',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({person,phone})
    })
    const data = await responce.json()
 }
 async function deletePost(id){
     const responce = await fetch('http://localhost:3030/jsonstore/phonebook/' + id,{
         method: 'delete'
     })
     const data = await responce.json()
 }