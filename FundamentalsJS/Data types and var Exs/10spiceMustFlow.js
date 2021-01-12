function spice(yield){

    let isProfitable = true
    let count = 0
    let sum = 0
    let total = 0

    for(let i = 1 ; i < Infinity ; i++){
       
        total = yield
            count++
            total-= 26
            sum+= total
            yield-= 10
            
          
        if(count > 1) {
            if(yield < 100){
            isProfitable = false
            sum-= 26
            console.log(count)
            console.log(sum)
            break;
        } }
         }

}
spice(111)