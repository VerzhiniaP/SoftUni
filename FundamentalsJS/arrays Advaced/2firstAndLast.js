function firstAndLast(arr){
    let k = arr.shift()


    let arr1 = arr.slice(0, k)
    let arr2 = arr.slice(arr.length - k, arr.length)
    console.log(arr1.join(' '))
    console.log(arr2.join(' '))
    
}
firstAndLast([2, 7, 8, 9])