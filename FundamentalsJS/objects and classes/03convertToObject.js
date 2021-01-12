function convert(string){

    let stringToJ = JSON.parse(string)
    let arr = Object.entries(stringToJ)
    for (let [key,value]  of arr) {
        console.log(`${key}: ${value}`);
    }
   

}
convert('{"name": "George", "age": 40, "town": "Sofia"}')