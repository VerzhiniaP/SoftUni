function emoji([arr]){

    let sum = 1
    let numArr = arr.split(/\D+/g).filter(x => x !== '')
    for(let number of numArr){
         number.split('').map(Number)
        .forEach(x => sum *= x)
           
    }
    console.log(`Cool threshold: ${sum}`)
    let result = ''
    let regexEmoji = /(::|\*\*)([A-Z][a-z]{2,})\1/g
    let emoji = regexEmoji.exec(arr)
    let countEmoji = 0
    while(emoji !== null){
        countEmoji++
        let word = emoji[0]
        word = word.substring(2,word.length - 2)
        let count = 0
        word.split('').forEach(x => {
         let code = x.charCodeAt()
         count+= code
        })
        
        if(count >= sum){
        result += emoji[0] + '\n'
        }
        emoji = regexEmoji.exec(arr)
    }
    console.log(`${countEmoji} emojis found in the text. The cool ones are:
${result}
    `);
    
}
emoji([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ])