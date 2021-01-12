function string(text){

    let array = text.split(', ')
    let arr = array.shift()
    let input = array.shift()
    let sum = 0
    if(input == 'LOWERCASE'){
    for(let line of arr){
        let code = line.charCodeAt()
        if(code >= 97 && code <= 122){
          sum+= code
        }
    }
   } else if(input == 'UPPERCASE'){
    for(let line of arr){
        let code = line.charCodeAt()
        if(code >= 65 && code <= 90){
          sum+= code
        }
    }
}
console.log(`The total sum is: ${sum}`);
}
string('HelloFromMyAwesomePROGRAM, LOWERCASE'
    )