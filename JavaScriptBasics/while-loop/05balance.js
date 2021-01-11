function balance(input) {

    let number = input[0]
    let sum = 0
    let index = 1
    
    while(number !== 'NoMoreMoney') {
        let num = Number(number)
        if (num < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        sum += num
        
        console.log(`Increase: ${num.toFixed(2)}`)
        number = input[index]
        index++
        
    }
    
console.log(`Total: ${sum.toFixed(2)}`)


}
balance([ '120', '45.55', '-150', ])