function sum(input){

    let n1 = Number(input[0])
    let n2 = Number(input[1])
    n1 < n2 
    let printLine = ''

    for(let i = n1 ; i <= n2 ; i++){
        let num = "" + i
        let oddSum = 0
        let evenSum = 0

        for(let j = 0 ; j < num.length ; j++){
            let digit = Number(num.charAt(j))
            if(j % 2 === 0) {
                evenSum += digit
            } else {
                oddSum += digit
            }
        }
        if (oddSum === evenSum) {
            printLine+= `${i} `
            
        }
    }
  console.log(printLine)
}
sum(["100000", "100050"])