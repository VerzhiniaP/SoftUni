function solve(){
 const btn = document.querySelector('button')
 let posts = document.querySelector('main').children[0]
 let archive = document.getElementsByClassName('archive-section')
 btn.addEventListener('click', onClick)

 function onClick(e){
    e.preventDefault()
    let name = e.target.parentNode.children[0].children[1]
    let title = e.target.parentNode.children[1].children[1]
    let category = e.target.parentNode.children[2].children[1]
    let content = e.target.parentNode.children[3].children[1]

    
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.textContent = title.value
    article.appendChild(h1)
    let p = document.createElement('p')
    let strong = document.createElement('strong')
    strong.textContent = category.value
    p.textContent = 'Category:'
    p.appendChild(strong)
    article.appendChild(p)
    let p1 = document.createElement('p')
    p1.textContent = 'Creator:'
    let strong2 = document.createElement('strong')
    strong2.textContent = name.value
    p1.appendChild(strong2)
    article.appendChild(p1)
    let p2 = document.createElement('p')
    p2.textContent = content.value
    article.appendChild(p2)
    let btnDel = document.createElement('button')
    btnDel.textContent = 'Delete'
    btnDel.className = 'btn delete'
    let btnArchive = document.createElement('button')
    btnArchive.textContent = 'Archive'
    btnArchive.className = 'btn archive'
    let div = document.createElement('div')
    div.className = 'buttons'
    div.appendChild(btnDel)
    div.appendChild(btnArchive)
    article.appendChild(div)
    posts.appendChild(article)
    btnArchive.addEventListener('click', (e)=>{
     let name = e.target.parentNode.parentNode.children[0].textContent
     let ol = archive[0].children[1]
     let li = document.createElement('li')
     li.textContent = name
     ol.appendChild(li)
      let arr = Array.from(ol.children)
      arr.sort((a,b) => a.textContent.localeCompare(b.textContent))
      arr.forEach(e=>ol.appendChild(e))
      e.target.parentNode.parentNode.remove()
      })
    btnDel.addEventListener('click', (e)=>{
      e.target.parentNode.parentNode.remove()
    })

 }
  }
