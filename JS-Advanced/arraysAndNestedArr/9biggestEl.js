function biggest(arr){
    let max = Number.MIN_SAFE_INTEGER
for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[i].length ; j++){
        if(arr[i][j] > max){
            max = arr[i][j]
        }
    }
}
return max
}
console.log(biggest([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]))