function player(input) {
    let num1 = Number(input[0])
    let num1str = num1 + ""
    let num2 = Number(input[1])
    let num2str = num2 + ""

    let n1 = Number(num1str[0])
    let n2 = Number(num1str[1])
    let n3 = Number(num1str[2])
    let n4 = Number(num1str[3])

    let f1 = Number(num2str[0])
    let f2 = Number(num2str[1])
    let f3 = Number(num2str[2])
    let f4 = Number(num2str[3])
    let isOdd = true
    let print = ""

    for (let i = num1 ; i <= num2 ; i++){
        isOdd = true
        let currentNum = "" + i
        let digit1 = Number(currentNum[0])
        let digit2 = Number(currentNum[1])
        let digit3 = Number(currentNum[2])
        let digit4 = Number(currentNum[3])

        if(digit1 % 2 == 0 || digit2 % 2 == 0 || digit3 % 2 == 0 
            || digit4 % 2 == 0) {
                isOdd = false
                continue
                
        }else if (digit1 < n1 || digit1 > f1){
           isOdd = false
           continue
        }else if(digit2 < n2 || digit2 > f2){
            isOdd = false
            continue
        }else if(digit3 < n3 || digit3 > f3){
            isOdd = false
            continue
        }else if(digit4 < n4 || digit4 > f4){
            isOdd = false
           continue
        }
        if(!isOdd){
            continue;
        }else {
            print += currentNum + " "
            continue;
        }

    }
    console.log(print)
 

    
}
player(["3555", "6789",
 
])