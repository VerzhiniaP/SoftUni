function stars(num){

    if(num == undefined){
        num = 5
    }
    let printLine = ''
    for(let i = 0 ; i < num ; i++){
        printLine = ''
        for(let j = 0; j < num ; j++){
            printLine+='* '
            }
            console.log(printLine)
    }
}
stars()