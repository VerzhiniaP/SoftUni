function winning(arr){

    let wordStr = arr.shift()
    let newArr = wordStr.split(',')
    
    for(let line of newArr){
        line = line.trim()
        if(line.length !== 20){
            console.log(`invalid ticket`);
        }else{
            let regex = /[\$|\@\#\^]{6}/g
           let match = line.match(regex)
            let first = line.substring(0,line.length / 2 )
            let second = line.substring(line.length / 2)
                if(first.match(regex) && second.match(regex)){
              if(first.match(/[\$|\@\#\^]{10}/g) && second.match(/[\$|\@\#\^]{10}/g)){
                  let symbol = match[0].substring(0,1)
                  console.log(`ticket "${line}" - ${first.length}${symbol} Jackpot!`)
              }else if(first.match(/[\$|\@\#\^]{6,9}/g) && second.match(/[\$|\@\#\^]{6,9}/g)){
                  let firstMatch = first.match(/[\$|\@\#\^]{6,9}/g)
                  let secondMatch = second.match(/[\$|\@\#\^]{6,9}/g)
                
                 let symbol = firstMatch[0][0]
                 if(firstMatch[0].length <=  secondMatch[0].length){
                 console.log(`ticket "${line}" - ${firstMatch[0].length}${symbol}`)
                 }else if(secondMatch[0].length < firstMatch[0].length){
                    console.log(`ticket "${line}" - ${secondMatch[0].length}${symbol}`)
                 }
              }
                }else{
                console.log(`ticket "${line}" - no match`);
            }
        }
        
    }
}
winning([ ' @@th@@@@@@e@@m@@@@@@, @@@@@@@@@@et@@@@@@@@, $$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey' ])