function mirror([arr]){

    let regex = /(\@|\#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g
    let match  = regex.exec(arr)
    let count = 0
    let obj = []
    while(match != null){
        count++
        let wordOne = match.groups.first
        let wordTwo = match.groups.second
        let revWordTwo = wordTwo.split('').reverse().join('')
        if(wordOne === revWordTwo){
        let printLine = ''
         printLine = `${wordOne} <=> ${wordTwo}`
         obj.push(printLine)

        }
        match = regex.exec(arr)
    }
    if(count == 0){
        console.log(`No word pairs found!`);
    }else{
   console.log(`${count} word pairs found!`)
    }

    if(obj.length == 0){
        console.log(`No mirror words!`)
    }else{
        console.log(`The mirror words are:
        ${obj.join(', ')}`);
    }

    

}
mirror([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])