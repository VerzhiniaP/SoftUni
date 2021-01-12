function numbers(arr){
    let newArr = []

    for(let i = 0 ; i < arr.length ; i++){
        let element = Number(arr[i])

        if(element < 0){
            newArr.unshift(element)
        }else if(element >= 0){
            newArr.push(element)
        }
    }

return newArr.join('\n')
}
console.log(numbers([3, -2, 0, -1]))