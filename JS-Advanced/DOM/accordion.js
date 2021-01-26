function toggle() {
 
    let button = document.querySelector('.button')
    let extra = document.querySelector('#extra')
   
    //   extra.style.display = (extra.style.display == '' || extra.style.display == 'none' )
    //   ? 'block' : 'none'
    //   button.textContent = button.textContent == 'More' ? 'Less' : 'More'
    
   if(extra.style.display == '' || extra.style.display == 'none'){
       extra.style.display = 'block'
   }else if(extra.style.display == 'block'){
       extra.style.display = 'none'
   }
   if(button.textContent == 'More'){
       button.textContent = 'Less'
   }else if(button.textContent == 'Less'){
       button.textContent = 'More'
   }
}
