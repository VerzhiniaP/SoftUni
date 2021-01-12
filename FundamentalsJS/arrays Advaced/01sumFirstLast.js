function sum(arr){
    let numOne = Number(arr[0])
    let numLast = Number(arr[arr.length - 1])
    let sum = numOne + numLast

    return sum

}
console.log(sum(['20', '30', '40']))