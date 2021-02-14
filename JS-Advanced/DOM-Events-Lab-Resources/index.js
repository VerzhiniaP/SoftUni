function solve() {
    const btn = document.querySelector('button')
    const modules = document.querySelector('.modules')
    const train = document.querySelector('main>section')
    btn.addEventListener('click',onClick)


    function onClick(e){
        e.preventDefault()
        let form = e.target.parentNode.parentNode
       let name = form.children[0].lastElementChild.value
       let date = form.children[1].children[1].value
       let tokens = date.split('T')
       let n = tokens[0].split('-')
       let dateNum = `${n[0]}/${n[1]}/${n[2]}`
       let module = form.children[2].children[1].value
       module = module.toUpperCase()
       if(name == '' || date == '' || module == 'Select module'){
           return
       }else{
           isSame = true
        let head = Array.from(document.querySelectorAll('.module>h3'))
        if(head.length > 0 && head.forEach(x=>{
            let [first,second] = x.textContent.split('-')
            if(first == module){
                let li = document.createElement('li')
                let h4 = document.createElement('h4')
                h4.textContent = `${name} - ${dateNum} - ${tokens[1]}`
                li.appendChild(h4)
                let btn = document.createElement('button')
                btn.innerHTML = 'Del'
                btn.className = 'red'
                li.appendChild(btn)
                li.className = 'flex'
                let ul = document.createElement('ul')
                ul.appendChild(li)
                x.parentElement.appendChild(ul)
                isSame = false
            }
          
            
        })){
         
         }
         else if(isSame){
        let li = document.createElement('li')
        let h4 = document.createElement('h4')
        h4.textContent = `${name} - ${dateNum} - ${tokens[1]}`
        li.appendChild(h4)
        let btn = document.createElement('button')
        btn.innerHTML = 'Del'
        btn.className = 'red'
        li.appendChild(btn)
        li.className = 'flex'
        let ul = document.createElement('ul')
        ul.appendChild(li)
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.textContent = `${module}-MODULE`
        div.appendChild(h3)
        div.appendChild(ul)
        modules.appendChild(div)
        div.className = 'module'
        }
             let del = Array.from(document.getElementsByClassName('red'))
        del.forEach(x=>x.addEventListener('click',(e)=>{
           e.target.parentNode.remove()
        }))
    }
    
    }

}