function garage(arr){

    let obj = new Map()
    for (let line of arr) {
       let[number,tokens] = line.split(' - ')
       if(!obj.has(number)){
       obj.set(number,[tokens])
       }else{
       let old = obj.get(number)
       old.push(tokens)
       obj.set(number,old)
       }
    }
    let sortedGarages = Array.from(obj)
    let output = '';
    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currCarKeyValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output)
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])