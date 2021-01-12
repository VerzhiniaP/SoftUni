function equal(arr1, arr2){

    let sum = 0
    let isIdent = false
    for(let i = 0 ; i < arr1.length; i++){
        let num1 = Number(arr1[i])
       
        for(let j = 0 ; j < arr2.length ; j++){
            let num2 = Number(arr2[j])
        
        if(i == j){
        if(num1 !== num2){
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isIdent = true
            break;
        }else{
           sum+= num1
        }
    }else{
        continue
    }
}

    }
   if(!isIdent){
       console.log(`Arrays are identical. Sum: ${sum}`)
   }


}
equal(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])