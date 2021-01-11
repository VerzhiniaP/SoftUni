function sum(num) {
let textNum= num + ""
let sum = 0;

    for( i = 0 ; i < textNum.length ; i++) {
       let number = Number(textNum[i]);
       sum += number ;

        
    }
console.log(`The sum of the digits is:${sum}`)
}
sum("1234")