function solve(num1, num2) {

    num1= Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let printResult = ""

    for(let i = num1 ; i <= num2 ; i ++) {
        if ( i % 9 === 0) {
            sum += i
            printResult += i + ""
        }
       

    }
    console.log(`The sum: ${sum}`)
    for (let i = num1; i <= num2; i++) {
        if(i % 9 ===0) {
            console.log(i)
        }
    }
}
solve("100", "200")