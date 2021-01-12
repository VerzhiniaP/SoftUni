function game(arr){
    
    let text = arr.shift()
    for(let i = 0 ; i < arr.length ; i++){
        let tokens = arr[i].split('|')
        if(tokens.includes('ChangeAll')){
            let sub = tokens[1]
            let rep = tokens[2]
         for(let line of text){
             if(line == sub){
                 text = text.replace(sub,rep)
             }
         }
        }else if(tokens.includes('Insert')){
            let index = Number(tokens[1])
            let value = tokens[2]
          let first = text.substring(0,index)
          let second = text.substring(index)
          text = first + value + second
        }else if(tokens.includes('Move')){
            let number = Number(tokens[1])
            let firstN = text.substring(0,number)
            let lastText = text.substring(number)
            text = lastText + firstN
        }else if(tokens == 'Decode'){
         console.log(`The decrypted message is: ${text}`);
        }
    }

}
game([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])