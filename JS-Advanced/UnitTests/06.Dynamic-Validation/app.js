function validate() {
  document.querySelector('#email').addEventListener('change', (e)=>{
    let email = e.target.value
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/g
     if(regex.test(email)){
         e.target.className = ''
     }else{
         e.target.className = 'error'
     }
  })
}
