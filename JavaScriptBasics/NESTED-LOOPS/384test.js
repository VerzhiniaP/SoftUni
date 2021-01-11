function profit(input){

    let printLine = ''
    let min = Number(input[0])
    let max = Number(input[1])
    let isDivided = false
    

    for ( let i = min ; i <= max ; i++) {
        let current = "" + i
        for ( let j = 0 ; j < current.length ; j++) {
            let currentNum = Number(current.charAt(j))

            if(currentNum % 2 !== 0) {
                
            printLine+= `${currentNum} ` 
        }else {
            continue
        }
    } 
}
    console.log(printLine)
}
profit(["3555", "6789"])