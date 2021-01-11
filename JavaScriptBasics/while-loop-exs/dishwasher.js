function dishwasher(input) {

index = 0
   let command = input[index]
   let totalDetergent = command * 750
   index++
   let count = 0
   let total = 0
   let chinii = 0
   let tenjeri = 0
   let isEnough = false
   let diff = 0
   

   while(command !== 'End'){
       command = Number(input[index])
       count++
       chinii+=command
       total = command * 5
       if(count % 3 == 0) {
           total = command * 15
           tenjeri+=command
       }
       chinii-=tenjeri
      
       if(total > totalDetergent) {
           diff = total - totalDetergent
           isEnough = true
           console.log(`Not enough detergent, ${diff} ml. more necessary!`)
           break;
       }
       totalDetergent -= total

     index++
     command = input[index]

   }
  if(!isEnough) {
   console.log(`Detergent was enough!`)
   console.log(`${chinii} dishes and ${tenjeri} pots were washed.`)
   console.log(`Leftover detergent ${totalDetergent} ml.`)
}
}
dishwasher([ '2', '53', '65', '55', 'End' ]
)