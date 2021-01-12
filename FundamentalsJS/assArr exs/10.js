function armies(arr){

    let count = 0
    let total = 0
    let objArmy = {}

    for (let line of arr) {
        let[leader, toDo] = line.split('')
        if(toDo[0].charCodeAt() >= 65 && toDo[0].charCodeAt() <= 90){
            leader+= ' ' + toDo
        }
        if(line.includes('arrives')){
            objArmy[leader] = []
        }else if(line.includes('defeated')){
            delete objArmy[leader]
        }else if(objArmy.hasOwnProperty(leader)){
            let tokens = line.split(':')
            let [armyName,armyCount] = tokens[1].split(', ')
            total+= armyCount
           objArmy[leader].push(armyName)
            objArmy[leader].push(armyName)

        }
        
    }
    console.log(objArmy);
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])