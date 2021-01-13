function same(num){

   num = String(num)
    let arr = num.split('')
    .map(Number)

    let isSame = true
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[i] != arr[j]){
                isSame = false
                }
        }
    }
    if(isSame == false){
        console.log(false)
    }else{
        console.log(true)
    }
    let sum = 0
    arr.forEach(x => sum+=x)
    console.log(sum);

}
same(2222222)