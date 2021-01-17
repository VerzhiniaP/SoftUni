function reverse(arr){
    let newArr = []
for(let i = 0 ; i < arr.length ; i++){
    if(i % 2 != 0){
   newArr.push(arr[i])
    }
}
return newArr
.map(x => x*2)
.reverse()
.join(' ')
}
console.log(reverse([10, 15, 20, 25]))
console.log(reverse([3, 0, 10, 4, 7, 3]));