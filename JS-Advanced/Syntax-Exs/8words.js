function words(string){
    let arr = string.split(/[^A-z\d]+/g)
    .filter(x => x!= '')
    let newArr = []
    for (let line of arr) {
        line = line.toUpperCase()
        newArr.push(line)
    }
    console.log(newArr.join(', '));

}
words('Hi, ho554w are you?')