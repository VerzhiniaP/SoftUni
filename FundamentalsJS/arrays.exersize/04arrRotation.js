function rotate(arr, num){

   for(let i = 0 ; i < num ; i++){ 
       
    let word = arr[0]
    arr.shift()
    arr.push(word)

}
console.log(arr.join(' '))

}
rotate([32, 21, 61, 1],
    4)