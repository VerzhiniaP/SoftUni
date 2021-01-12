function string(word,text){

    word = word.toLowerCase()
    let isFound = false
    let arr = text.split(' ')
    for (let line of arr) {
        line = line.toLowerCase()

        if(line == word){
            console.log(line)
            isFound = true
            break
        }
    }
    if(!isFound){
        console.log(`${word} not found!`);
    }


}
string('javascript',
'JavaScript is the best programming language'
)