function easter(input) {
 let points = 301
let bad = 0
let count = 0
let sum = 0
//let isZero = true
 index = 0 
 let name = input[index]
 index++
 let type = input[index]
 while(type !== "Retire") {
     index++
     let point = Number(input[index])

     if(type == "Single"){
         sum = point
         if(sum > points) {
             bad++
            points
            
        
        }else {
            points-=sum
            count++
            
        }

     }else if(type == "Double"){
         sum = point * 2
         if(sum > points) {
             bad++
            points
        
        
        }else {
            points-=sum
            count++
            
        }

     }else if(type == "Triple"){
        sum = point * 3
        if(sum > points) {
            bad++
            points
            
        }else {
            points-=sum
            count++
        }
     }
    if(points == 0) {
           // isZero = true
           console.log(`${name} won the leg with ${count} shots.`)
           break;
        }

     index++     
     type = input[index]
    } 

   
    if( type == "Retire") {
        console.log(`${name} retired after ${bad} unsuccessful shots.`)
    }

}
easter( [ "Michael van Gerwen", 
"Triple", "20",
"Triple", "19",
"Double", "10",
"Single", "3",
"Single", "1",
"Triple", "20",
"Triple", "20",
 "Double", "20",
 
 
  
])