function search() {
   let input = document.querySelector('#searchText').value
    let result = document.querySelector('#result')
   let table = document.querySelectorAll('ul li')
   tableArr = Array.from(table)
   let resultArr = []
   for(let i = 0 ; i < table.length ; i++){
      if(table[i].textContent.toLowerCase().includes(input.toLowerCase())){
         resultArr.push(table[i].textContent)
         table[i].style.textDecoration = "underline"
         table[i].style.fontWeight = "bold"         
      }else{
         table[i].style.textDecoration = ""
         table[i].style.fontWeight = ""
      }
   }
   result.textContent = `${resultArr.length} matches found`
   
  

}
