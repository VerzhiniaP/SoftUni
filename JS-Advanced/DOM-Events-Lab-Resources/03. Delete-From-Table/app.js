function deleteByEmail() {
   let rows = Array.from(document.querySelectorAll('tbody tr'))
   let input = document.querySelector('input').value
   let result = document.querySelector('#result')
  let deleted = false
   for(let row of rows){
       let text = row.children[1].textContent
       if(input == text){
           row.remove()
           result.textContent = 'Deleted.'
           deleted = true
       }
   }
   if(!deleted){
       result.textContent = 'Not found.';
   }
}