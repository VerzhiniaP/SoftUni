function division(input){
    let budget = Number(input[0])
    index = 1
    let name = input[index]
    let count = 0
    let total = 0
    let diff = 0
    let istrue = false

    while(name !== "Stop") {
        
        count++
        index++
        let price = Number(input[index])
        if(count == 3){
            price*= 0.50
        }
        total += price
        
         diff += budget - total
         

        if(price > diff) {
            price-= price - diff
            console.log(`You don't have enough money!`)
            console.log(`You need ${price} leva!"`)
            istrue = true
                break;
            
        }

        index++
        name = input[index]
        
        
        
    }
        
    if(!istrue){
        console.log(`You bought ${count} products for ${total.toFixed(2)} leva.`)
    }

    
   
        }
division(["153.20",
"Backpack","25.20",
"Shoes", "54",
"Sungasses", "30",
"Stop"]
  )