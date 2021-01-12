function amazing(number){
    
    let numToString = number.toString()
    let sum = 0

    for(let i = 0 ; i < numToString.length ; i++){
        let num = Number(numToString[i])
        sum += num
    
    }

    if(sum.toString().includes('9')){
        console.log(`${number} Amazing? True`)
    }else{
        console.log(`${number} Amazing? False`)
    }

}
amazing(999)