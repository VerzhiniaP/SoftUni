function secret(arr){

    let text = arr.shift()
    let tokens = arr.shift()
    while(tokens != 'Reveal'){
         if(tokens.includes('ChangeAll')){
         let [command,sub,rep] = tokens.split(':|:')
         while(text.includes(sub)){
         text = text.replace(sub,rep)
         }
         console.log(text);
         }else if(tokens.includes('Reverse')){
             let [command,sub] = tokens.split(':|:')
             if(text.includes(sub)){
                 let index = text.indexOf(sub)
               let firstPart = text.substring(0,index)
               let secondPart = text.substring(index+sub.length)
               let reversed = sub.split('').reverse().join('')
               text = firstPart + secondPart + reversed
               console.log(text);
             }else{
               console.log(`error`)
             }
         }else if(tokens.includes('InsertSpace')){
             let [command,index] = tokens.split(':|:')
             let first = text.substring(0,index)
             let second = text.substring(index)
             text = first + ' ' + second
             console.log(text)
         }else if(tokens == 'Reveal'){
             break
         }

        tokens = arr.shift()
    }
    console.log(`You have a new text message: ${text}`);
}
secret( [ 'Hiware?uiy',
'ChangeAll:|:i:|:o',
'Reverse:|:?uoy',
'Reverse:|:jd',
'InsertSpace:|:3',
'InsertSpace:|:7',
'Reveal'
] )