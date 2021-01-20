function smallest(arr){
arr.sort((a,b) => a - b)
let newArr = []
newArr.push(arr[0])
newArr.push(arr[1])
console.log(newArr.join(' '));
}
smallest([3, 0, 10, 4, 7, 3])