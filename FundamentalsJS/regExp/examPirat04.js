function pirat(arr){

    let obj = {}
   let line = arr.shift()
   while(line !== 'Sail'){
    let [city,people,gold] = line.split('||')
    people = Number(people)
    gold = Number(gold)
    if(!obj.hasOwnProperty(city)){
        obj[city] = []
        obj[city].push(people)
        obj[city].push(gold)
    }else{
      obj[city][0]+=people
      obj[city][1]+=gold
    }
    
       line = arr.shift()
   }
   let event = arr.shift()
   while(event !== 'End'){
       if(event.includes('Plunder')){
         let [command,town,people,gold] = event.split('=>')
         people = Number(people)
         gold = Number(gold)
         console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
         obj[town][0]-= people
         obj[town][1]-=gold
         if(obj[town][0] == 0 || obj[town][1] == 0){
             delete obj[town]
             console.log(`${town} has been wiped off the map!`);
        }

       }else if(event.includes('Prosper')){
        let [command,town,gold] = event.split('=>')
        gold = Number(gold)
         if(gold < 0){
             console.log(`Gold added cannot be a negative number!`);
         }else{
         obj[town][1]+=gold
         console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town][1]} gold.`)
         }
       }
       
       event = arr.shift()
   }
   let sorted = Object.entries(obj).sort((a,b) => b[1][1] -(a[1][1]) ||
   a[0][0].localeCompare(b[0][0]) )
   
   if(obj == {}){
       console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
   }else{
       console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`)
       for(let line of sorted){
           console.log(`${line[0]} -> Population: ${line[1][0]} citizens, Gold: ${line[1][1]} kg`);
       }
   }

}
pirat([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
  ]
  )