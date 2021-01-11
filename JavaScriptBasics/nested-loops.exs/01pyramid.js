function pyramid(input){
    let n = Number(input[0])
    let current = 1
    let isBigger = false
    let printCurrentline = ""


    for(let row = 1 ; row <= n ; row++) {
        for (let j = 1 ; j <= row ; j++) {

            if (current > n) {
                isBigger = true
                break;
            }
            printCurrentline += current + " ";
            current++

        }
        console.log(printCurrentline)
        printCurrentline = "";
        if(isBigger) {
            break;
        }

    } 

}
pyramid(["12"])