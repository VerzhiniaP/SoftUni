function palindrome(arr) {

    let printLine = ''
    for(let i = 0 ; i < arr.length ; i++){
    let first = String(arr[i])
    let reverse = first.split('').reverse().join('')

    if(first == reverse){
        printLine+= 'true' + '\n'
        
    }else{
        printLine+= 'false' + '\n'
        }
    }
    return printLine
  
}
console.log(palindrome([123, 323, 421, 121]))
