function barcode(arr){
    let regex = /(\@\#+)(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])(\@\#+)/g
    let num = Number(arr.shift())
   for(let i = 0 ; i < num ; i++){
       if(!arr[i].match(regex)){
          console.log(`Invalid barcode`);
       }else{
       let match = regex.exec(arr[i])
      let word = match.groups.name
       let sum = ''
      if(word.match(/\d/)){
        let wordArr = word.split('')
        for(let line of wordArr){
            if(line.match(/\d/)){
                sum+=line
            }
        }
        console.log(`Product group: ${sum}`)
      }else{
          console.log(`Product group: 00`);
      }
       
   }
}
}
barcode([  '@###Val1d1teM@###',
'@#ValidIteM@#',
'##InvaliDiteM##',
'@InvalidIteM@',
'@#Invalid_IteM@#',
'@#ValiditeM@#'
])