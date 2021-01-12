function char(a,b){

    let first = a.charCodeAt(0)
    let second = b.charCodeAt(0)

    let start = 0
    let end = 0
    if(first < second){
        start = first
        end = second
    }else{
        start = second
        end = first
    }
  
    let printLine = ''
    for(let i = start + 1 ; i < end ; i++){
        printLine+=String.fromCodePoint(i) + ' '
    }

    return printLine
}
console.log(char('a', 'd'))