function vet(input) {
    let broiDni = Number(input[0])
    let broiChasoveZaDen = Number(input[1])

    
    let total = 0
    

    for(let i = 1 ; i <= broiDni ; i++) {
        let price = 0
        
        if (i % 2 === 0) {
        for(let j = 1 ; j <= broiChasoveZaDen ; j++) {
            if( j % 2 === 0) {
                price += 1
            }else {
                price += 2.50
            }
            
        } 
    } else {
        for(let j = 1 ; j <= broiChasoveZaDen ; j++) {
            if (j % 2 === 0){
                price+=1.25
            }else {
                price+=1
            }
            
        }
    }
     
    console.log(`Day: ${i} - ${price.toFixed(2)} leva`)   
    total+=price
    }
    
  
console.log(`Total: ${total.toFixed(2)} leva`)


}
vet([ '2', '5' ])