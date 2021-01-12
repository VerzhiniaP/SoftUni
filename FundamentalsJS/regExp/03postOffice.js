function post(arr){

   for(let liniqta of arr){
    let partsArr = liniqta.split('|')
    let firstPart = partsArr[0]
    let secondPart = partsArr[1]
    let thirdPart = partsArr[2].split(' ')
    let first = firstPart.match(/(#|\$|%|\*|&)([A-Z]+)\1/g)
    if(first[0][0] === first[0][first[0].length - 1]){
    let caps = first[0].substring(1,first[0].length - 1)
    .split('')
    let second = secondPart.match(/(?<code>\d{2}):(?<length>\d{2})/g)
    
    for (let line of second) {
        let[ascii,lengthWord] = line.split(':')
        lengthWord = Number(lengthWord)
        let code = String.fromCharCode(ascii)
        if(lengthWord >= 1 && lengthWord <= 20){
       if(caps[0].match(code)){
          for(let line of thirdPart){
              if(line[0] == code && line.length == lengthWord + 1){
                  console.log(line)
                  caps.shift()
              }
          }
       }
    }
    }
}
   }
    
    }

post([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
  ])