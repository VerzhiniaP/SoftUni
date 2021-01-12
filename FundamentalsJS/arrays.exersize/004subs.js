function subs(arr){

    let max = Number.MIN_SAFE_INTEGER

    let newArr = []

    for(let i = 0 ; i < arr.length ; i++){
        let num = arr[i]

        if( num >= max){
            max = num
            newArr.push(max)
        }else{
            continue
        }
    
    }
    console.log(newArr.join(' '))

}
subs([20, 3, 2, 15, 6, 1])