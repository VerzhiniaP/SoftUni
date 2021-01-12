function rotate(arr){

    let num = Number(arr[arr.length - 1])
    arr.pop()

    for(let i = 0 ; i < num ; i++){

     let first = arr[arr.length - 1]
     arr.unshift(first)
     arr.pop()
}
  console.log(arr.join(' '))

}
rotate([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ]
)