function pascal(str){
    let arr = str.split('')
    
    let newArr = []
    let capIndex = 0
    for(let i = 1 ; i < arr.length ; i++){
        let word = ''
        let letter = arr[i]
        let code = letter.charCodeAt()
        if(code >= 65 && code <= 90){
          word = (arr.join('')).substring(capIndex,i)
          newArr.push(word)
          capIndex = i
        }
    }
    newArr.push(str.substring(capIndex,str.length))
  console.log(newArr.join(', '));
}
pascal('ThisIsSoAnnoyingToDo')