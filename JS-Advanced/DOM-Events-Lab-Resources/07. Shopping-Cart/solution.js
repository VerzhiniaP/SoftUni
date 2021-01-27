function solve() {
   let text = document.querySelector('textarea')
   let arr = []
   let onClick = (event) =>{
      if(event.target.tagName == 'BUTTON' && event.target.className == 'add-product'){
           let product = event.target.parentNode.parentNode
           let title = product.querySelector('.product-title').textContent
           let price = Number(product.querySelector('.product-line-price').textContent)
           arr.push({[title] : price})
           text.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
        }
     }
document.querySelector('.shopping-cart').addEventListener('click' ,onClick)
 
let onCheckOut = ()=>{
   let newArr = []
   let total = 0
    for(let line of arr){
      for(let title in line){
         if(!newArr.includes(title)){
            newArr.push(title)
            total+= line[title]
         }else{
            total+=line[title]
         }
      }
   }
   text.value += `You bought ${newArr.join(', ')} for ${total.toFixed(2)}.`
 }
 document.querySelector('.checkout').addEventListener('click', onCheckOut)

document.querySelector('.checkout').addEventListener('click', ()=> {
document.querySelector('.shopping-cart').removeEventListener('click' , onClick)
document.querySelector('.checkout').removeEventListener('click' , onCheckOut)
})

}
