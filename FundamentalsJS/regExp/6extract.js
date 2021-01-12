function extract(text){

    let regex = /\s[A-Za-z]+([\_\.\-\w]+)?@([A-Za-z]+([\-][A-Za-z]+)?)\.[A-Za-z]+([\.\-][A-Za-z]+)?/g
    let match = regex.exec(text)
    while(match !== null){
        console.log(match[0])
        match = regex.exec(text)
    }
    
}
extract(
    'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'
)