function modern(string){

 let arr = string.split(' ')

for (let line of arr) {
    if(line[0] == '#' && line.length > 1){
        let isNotLetter = true
        line = line.substring(1)
        for (let letter of line) {
            let code = letter.charCodeAt()
            if(code < 65 || code > 90 && code < 97  || code > 122  ){
          isNotLetter = false
          break
            }
        }
        if(isNotLetter){
            console.log(line);
        }
    }
    
}
    
   

}
modern('Nowadays everyone uses # to tag a #special word in #socialMedia')