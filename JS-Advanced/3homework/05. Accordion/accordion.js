async function solution() {
    
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'

    const response = await fetch(url)
    const data = await response.json()
    const main = document.getElementById('main')
     data.forEach(obj => {
         let div = document.createElement('div')
         div.className = 'accordion'
         let div2 = document.createElement('div')
         div2.className = 'head'
         let span = document.createElement('span')
         span.textContent = obj.title
         let button = document.createElement('button')
         button.className = 'button'
         button.id = obj._id
         button.textContent = 'More'
         div2.appendChild(span)
         div2.appendChild(button)
         div.appendChild(div2)
        
         let divExtra = document.createElement('div')
         divExtra.className = 'extra'
         let p = document.createElement('p')
         p.textContent = 'Scalable Vector Graphics (SVG) is an Extensible Markup Language (XML)-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999. '
         divExtra.appendChild(p)
         divExtra.style.display = 'none'
         div.appendChild(divExtra)
         main.appendChild(div)
         
        
     })

     Array.from(document.querySelectorAll('button')).forEach(x=>x.addEventListener('click', onClick))

     function onClick(e){
        
         if(e.target.textContent == 'More'){
             e.target.textContent = 'Less'
             e.target.parentNode.parentNode.children[1].style.display = 'block'
            
         }else{
             e.target.textContent = 'More'
             e.target.parentNode.parentNode.children[1].style.display = 'none'
            
             
         }
     }
}
solution()