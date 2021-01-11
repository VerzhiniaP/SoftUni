function solve(input) {
    let n = Number(input[0])

    let p1 = 0
    let p2 = 0
    let p3 = 0

   for (let i = 1 ; i < input.length ; i++){
       let currentNumber = Number(input[i])

       if (currentNumber >= 1 && currentNumber <= 1000) {
           if (currentNumber % 2 === 0 )
               p1++}
           
   if (currentNumber >= 1 && currentNumber <= 1000) {
        currentNumber % 3 === 0 
           p2++}
       
       else if (currentNumber >= 1 && currentNumber <= 1000) {
           currentNumber % 4 === 0 
               p3++}
           
       }

   
   console.log(`${(p1 / n * 100).toFixed(2)}%`)
   console.log(`${(p2 / n * 100).toFixed(2)}%`)
   console.log(`${(p3 / n * 100).toFixed(2)}%`)


    }
solve([
    "3", "3", "6", "9" 
])