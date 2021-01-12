function odd(arr){

    let sum = 0
    let newSum = 0
    for(let i = 0 ; i < arr.length ; i++){
        let num = Number(arr[i])
        sum += num

        if(num % 2 == 0){
            arr[i] += i
        }else{
            arr[i] -=i
        }
        newSum += arr[i]
        
    }
    console.log(arr)
    console.log(sum)
    console.log(newSum)
    

}
odd([5, 15, 23, 56, 35])