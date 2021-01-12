function destination(text){

    let regex = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g
    let match = regex.exec(text)
    let arr = []
    while(match != null){
        arr.push(match.groups.name)
    match = regex.exec(text)
    }
    let sum = 0
    for(let line of arr){
      sum+= line.length
    }
    console.log(`Destinations: ${arr.join(', ')}`)
    console.log(`Travel Points: ${sum}`);

}
destination('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
