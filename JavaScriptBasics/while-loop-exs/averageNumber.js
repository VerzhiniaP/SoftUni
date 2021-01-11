function number(input){

    let count = Number(input[0])
    sum = 0
    let avr = 0
   
    for(index = 1 ; index <= count ; index++ ){
        let num = Number(input[index])
        sum+= num
        avr = sum / count

    }
    console.log(avr.toFixed(2))


}
number([ '4', '3', '2', '4', '2' ])