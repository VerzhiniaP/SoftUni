function diagonal(arr){
    let newArr = []
    let sumFirst = 0
    let sumSecond = 0
for(let i = 0 ; i < arr.length ; i++){
   sumFirst+=arr[i][i]
   sumSecond+=arr[i][arr.length - (i+1)]
}

newArr.push(sumFirst)
newArr.push(sumSecond)
console.log(newArr.join(' '));
}
diagonal([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
   )