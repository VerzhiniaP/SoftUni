function create(words) {
   let content = document.getElementById('content')
   for(let i = 0 ; i < words.length ; i++){
      let div = document.createElement('div')
      let paragraph = document.createElement('p')
      paragraph.textContent = words[i]
      paragraph.style.display = 'none'
      div.appendChild(paragraph)
      content.appendChild(div)
   }
   content.addEventListener('click', onClick)
   function onClick(event){
   if(event.target.tagName == 'DIV' || event.target.tagName == 'p'){
      let p = event.target.children[0] || event.target 
      p.style.display = 'block'
   }
   
   }
}