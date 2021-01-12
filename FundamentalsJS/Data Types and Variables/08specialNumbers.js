function numbers(num){

   
    for(let i = 1 ; i <= num ; i++){
        let sum = 0
            let number = i.toString()
            for(let j = 0 ; j < number.length ; j++){
                sum+= Number(number[j])
                
        }
        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`)
        }else{
        console.log(`${i} -> False`)
                
            }
    
        
    }

}
numbers(15)