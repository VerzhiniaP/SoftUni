function sum(num){

    num = Number(num)
    let count = 0
    let counter = 0
    let isMore = false

    
  
    for(i = 1 ; i <= 100 ; i++){

        if(i % 2 === 0){
            continue
            
        }else{
            console.log(i)
            counter++
            count+= i
            if(counter >= num){
                isMore = true
                break;
    
            }
        }
       
        
        
        
}

console.log(`Sum: ${count}`)
}
sum(5)