function hero(arr){

    let newArr = []
    for(let line of arr){
       let [name,level,items] = line.split(' / ')
       level=Number(level)
      items = items ? items.split(', ') : []
       newArr.push({name,level,items})
    }

    console.log(JSON.stringify(newArr));

}
console.log(hero(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));