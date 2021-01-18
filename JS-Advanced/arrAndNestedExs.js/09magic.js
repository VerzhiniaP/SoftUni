function magic(arr){
    for(let i = 0 ; i < arr.length - 1 ; i++){
        let sumRow1 = arr[i].reduce((a,b)=> a + b , 0 )
        let sumRow2 = arr[i+1].reduce((a,b) => a + b , 0)
        let sumColOne = 0
        let sumColTwo = 0
        for(let col = 0 ; col < arr.length ; col++){
        sumColOne+=arr[i][col]
        sumColTwo+=arr[i+1][col]
        }
        if(sumColOne !== sumColTwo || sumRow1 !== sumRow2){
            return false
           }
    }
    return true
}
console.log(magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ))