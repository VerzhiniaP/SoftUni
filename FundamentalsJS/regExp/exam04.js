function activation(arr){

    let key = arr.shift()
    for(let line of arr){
       let tokens = line.split('>>>')
        if(tokens.includes('Contains')){
          let sub = tokens[1]
          if(key.includes(sub)){
              console.log(`${key} contains ${sub}`);
          }else{
              console.log(`Substring not found!`);
          }
        }else if(tokens.includes('Flip')){
         let upOrLow = tokens[1]
         let start = Number(tokens[2])
         let end = Number(tokens[3])
         if(upOrLow == 'Upper'){
          let part = key.slice(start,end)
          let newPart = part.toUpperCase()
          key = key.replace(part,newPart)
          console.log(key)
         }else if(upOrLow == 'Lower'){
            let part = key.slice(start,end)
            let newPart = part.toLowerCase()
            key = key.replace(part,newPart)
            console.log(key)
         }

        }else if(tokens.includes('Slice')){
        let start = Number(tokens[1])
        let end = Number(tokens[2])
        let partOne = key.substring(0,start)
        let partTwo = key.substring(end)
        let newKey = partOne + partTwo
        key = key.replace(key,newKey)
        console.log(key);
        }else if(line == 'Generate'){
            break
        }
    }
    console.log(`Your activation key is: ${key}`);
}
activation([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ])