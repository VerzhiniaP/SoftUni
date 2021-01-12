function even(arr){

    let sumEven = 0
    let sumOdd = 0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(element % 2 == 0){
            sumEven+= element
        }else{
            sumOdd+= element
        }
         }
         let result = sumEven - sumOdd
         console.log(result)

}
even([1, 2, 3, 4, 5, 6])