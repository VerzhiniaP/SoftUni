function inventory(arr){

    let array = []
    
    for (const line of arr) {
        let[hero,level,items] = line.split(' / ')
        items = items.split(', ').sort( (a,b) => a.localeCompare(b)).join(', ')
        level = Number(level)
        let register = {
            Hero: hero,
            level,
            items
        }
        array.push(register)
    }
   array
   .sort((a,b) => a.level - b.level)
   .forEach(hero => {
       console.log(`Hero: ${hero.Hero}`);
       console.log(`level => ${hero.level}`);
       console.log(`items => ${hero.items}`);
   })

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )