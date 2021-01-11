function codes(input){
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let num3 = Number(input[2])
    let printLine = ''
    let print = ''
    let printJ = ''

    let isPrime = true
    

    for(let i = 1 ; i <= num1 ; i++){
      
        if(i % 2 == 0) {
            printLine = i + ""
        }else{
            continue
        }
       
        for(let j = 1 ; j <= num2 ; j++) {
            if(j == 1 || j == 4){
                isPrime = false
                continue
            }else if(j == 2){
                isPrime = true
               printJ = j + ""
            }else{
                printJ = j + ""
            }
            for(let k = 1 ; k <= num3 ; k++){
         
                if(k % 2 == 0){
                    print = k + ""
                }else{
                    continue
                }
            
                console.log(`${printLine} ${printJ} ${print}`)
            }
            
        }
        

    }
   

}
codes([ '8', '2', '8', '' ])