function system(input) {
     index = 0
     let totalSum = input[index]
     index++
     let total = 0
     let sum = input[index]
     let isDone = false
     let count = 0
     let cash = 0
     let card = 0
     let cardCount = 0
     let cashCount = 0

     while(sum !== 'End') {
         sum = Number(input[index])
         count++

         if(count % 2 == 0) {
             if(sum < 10){
                 console.log(`Error in transaction!`)
             }else{
                cardCount++
             console.log(`Product sold!`)
             card+=sum }


         }else{
             if(sum >100) {
                 console.log(`Error in transaction!`)
             }else{
                cashCount++
             console.log(`Product sold!`)
             cash+=sum }
         }
         total = card + cash

         if(total >= totalSum){
             let avr = cash / cashCount
             let avR = card / cardCount
             console.log(`Average CS: ${avr.toFixed(2)}`)
             console.log(`Average CC: ${avR.toFixed(2)}`)
             isDone = true
             break
         }

         index++
         sum = input[index]

     }
     if(!isDone){
         console.log(`Failed to collect required money for charity.`)
     }

}
system([ '600', '86', '150', '98', '227', 'End' ])