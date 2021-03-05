document.querySelector('form').addEventListener('submit', onSubmit)

async function onSubmit(e){
    e.preventDefault()
   const students = new FormData(e.target)
   let firstName = students.get('firstName')
   let lastName = students.get('lastName')
   let number = students.get('facultyNumber')
   let grade = students.get('grade')
    postStudent(firstName,lastName,number,grade)
    createLi(firstName,lastName,number,grade)

}


async function postStudent(firstName,lastName,number,grade){
    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({firstName,lastName,number,grade})
    })
    const data = await response.json()
}
function createLi(firstName,lastName,number,grade){
    const result = document.querySelector('#results tbody')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = firstName
    tr.appendChild(th)
    let th1 = document.createElement('th')
    th1.textContent = lastName
    tr.appendChild(th1)
    let th2 = document.createElement('th')
    th2.textContent = number
    tr.appendChild(th2)
    let th3 = document.createElement('th')
    th3.textContent = grade
    tr.appendChild(th3)
    result.appendChild(tr)

}