function extract(arr){
    let newArr = []
    let maxNum = Number.MIN_SAFE_INTEGER
    for(let i = 0 ; i < arr.length ; i++){
         if(arr[i] >= maxNum){
             maxNum = arr[i]
             newArr.push(maxNum)
         }

    }
 
    return newArr
}
console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))