function sum(number){

    let sum = 0
    number = Number(number)
    let numToString = number.toString()
    for(let i = 0 ; i < numToString.length ; i++){

        let num = Number(numToString[i])
        sum+= num
       
    }

    console.log(sum)
}
sum(245678)