function santa(arg1, arg2, arg3){

    let n = Number(arg1) //0 <= N < M
    let m = Number(arg2) //N < M <= 10000
    let s = Number(arg3) //N <= S <= M
    let isError = false
    let printLine = ""

    for(i = m ; i >= n ; i--){
        
        if(i % 2 === 0 && i % 3 === 0){
           
            if(i === s){
                isError = true
                console.log(printLine)
                break;

            }
            printLine+= `${i} `
        }
    }
if(!isError){
    console.log(printLine)
}
}
santa("20", "1000", "36")