function oddOrEven(num){

    let sumEven = 0
    let sumOdd = 0
    num = String(num)
    for(let i = 0 ; i < num.length ; i++){
        let number = Number(num[i])

        if(number % 2 == 0){
            sumEven+= number
        }else{
            sumOdd+= number
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
   
    


}
console.log(oddOrEven(3495892137259234))
