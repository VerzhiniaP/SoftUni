function test(arr){
    let newArr = []
  
    for(let i = 0 ; i < arr.length ; i++){
        let sum = 0
        sum = Number(arr[i]) +  Number(arr[i + 1])
        i++
      newArr.push(sum)
    }

    console.log(newArr);

}
test([1, 2, 3, 4, 5])