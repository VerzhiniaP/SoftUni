function store(arrOne, arrTwo){

    let newArr = []
    for(let i = 0 ; i < arrOne.length ; i++){
        let product = arrOne[i]
        let quantity = Number(arrOne[i + 1])
        i++
      for(let j = 0 ; j < arrTwo.length ; j++){
          let productTwo = arrTwo[j]
          let quantityTwo = Number(arrTwo[j + 1])
          j++
          if(product === productTwo){
              quantity+= quantityTwo
          }
      } 
      newArr.push(product)
      newArr.push(quantity)
      
    }
    for(let k = 0 ; k < arrTwo.length ; k++){
        let product = arrTwo[k]
        let quantity = Number(arrTwo[k+1])
        if(newArr.includes(product)){
          }else{
            newArr.push(product)
            newArr.push(quantity)
        }
        k++
    }
    let shop = {}
   for(let h = 0 ; h < newArr.length ; h++){
       let product = newArr[h]
       let quantity = newArr[h + 1]
       shop[product] = Number(quantity)
       h++
   }
   Object.entries(shop).forEach(element => 
       console.log(`${element[0]} -> ${element[1]}`)
   )
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )