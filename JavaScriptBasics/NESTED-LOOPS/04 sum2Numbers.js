function sum (input) {
    let number1 = Number(input[0])
    let number2 = Number(input[1])
    let magic = Number(input[2])
    let flag = false
    let counter = 0
    for ( let i = number1 ; i <= number2 ; i++) {
        if(flag){
            break
        }
        for ( let j = number1 ; j <= number2 ; j++) {
            counter++
            if( i + j === magic) {
            console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`) 
            flag = true
            break; 
        }
        }

    }
    if(!flag) {
        console.log(`${counter} combinations - neither equals ${magic}`)
    }



}
sum(['1' , '10', '5'])