function magic(arr, magic){

    for(let i = 0 ; i < arr.length ;  i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            let sum = 0
            sum = arr[i] + arr[j]

            if(sum === magic){
                console.log(`${arr[i]} ${arr[j]}`)
            }
        }
    }

}
magic([14, 20, 60, 13, 7, 19, 8],
    27)