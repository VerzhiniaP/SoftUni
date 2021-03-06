async function request(url,options){
    const response = await fetch(url, options)
    if(response.ok != true){
        const error = await response.json()
        alert(error.message)
        throw new Error(error.message)
    }
    const data = await response.json()
    return data
}
async function getAllBooks(){
    const books = await request('http://localhost:3030/jsonstore/collections/books')
   const rows = Object.entries(books).map(createRow).join('')
    document.querySelector('tbody').innerHTML = rows
    
    function createRow([id,book]){
        const result = `
        <tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
         </tr>`
         return result
      }
}

async function createBook(event){
   event.preventDefault()
   const formData = new FormData(event.target)
   const book = {
       title: formData.get('title'),
       author: formData.get('author')
   }
   await request('http://localhost:3030/jsonstore/collections/books',{
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(book)

    })
    event.target.reset()
    getAllBooks()
}

async function updateBook(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const id = formData.get('id')
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }
    await request('http://localhost:3030/jsonstore/collections/books' + id, {
        method: 'put',
        headers:  {'Content-type': 'application/json'},
        body: JSON.stringify(book)
    })
    document.getElementById('createForm').style.display = 'block'
    document.getElementById('editForm').style.display = 'none'
    event.target.reset()
    getAllBooks()
}
async function deleteBook(id){
    const result =await request('http://localhost:3030/jsonstore/collections/books' + id , {
        method: 'delete'
    })
    getAllBooks()
}
function start(){
  document.getElementById('loadBooks').addEventListener('click', getAllBooks)
  document.getElementById('createForm').addEventListener('submit', createBook)
  document.getElementById('editForm').addEventListener('submit', updateBook)
  document.querySelector('table').addEventListener('click', handleTableClick )
getAllBooks()
}
start()

function handleTableClick(event){
    if(event.target.className == 'editBtn'){
        document.getElementById('createForm').style.display = 'none'
        document.getElementById('editForm').style.display = 'block'
        let id = event.target.parentNode.parentNode.dataset.id
        loadBookForEditing(id)
    }else if(event.target.className == 'deleteBtn'){
        let confirmed = confirm('Are you sure you want to delete this book?')
        if(confirmed){
        let id = event.target.parentNode.parentNode.dataset.id
        deleteBook(id)
        }
    }
}

async function loadBookForEditing(id){
    const book = await request('http://localhost:3030/jsonstore/collections/books' + id)
    document.querySelector('#editForm [name="id"]').value = book.id
    document.querySelector('#editForm [name="title"]').value = book.title
    document.querySelector('#editForm [name="author"]').value = book.author

}