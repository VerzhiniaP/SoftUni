function speed(arr){
    let num = Number(arr.shift())
     let obj = {}
    for(let i = 0 ; i < num ; i++){
        let tokens = arr[0].split('|')
       let car = tokens[0]
       let distance = Number(tokens[1])
       let fuel = Number(tokens[2])
       obj[car]=[]
       obj[car].push(distance)
       obj[car].push(fuel)
        arr.shift()
    }
    let line = arr.shift()
while(line != 'Stop'){
   let tokens = line.split(' : ')
   if(tokens.includes('Drive')){
    let car = tokens[1]
    let dist = Number(tokens[2])
    let fuel = Number(tokens[3])
    if(obj[car][1] < fuel){
        console.log(`Not enough fuel to make that ride`);
    }else{
       obj[car][0]+=dist
       obj[car][1]-=fuel
       console.log(`${car} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.`)
       if(obj[car][0] >= 100000){
           delete obj[car]
           console.log(`Time to sell the ${car}!`);
       }
    }
   
   }else if(tokens.includes('Refuel')){
    let car = tokens[1]
    let fuel = Number(tokens[2])
    let oldFuel = obj[car][1]
    let countFuel = 0
    let total = oldFuel + fuel
    if(total <= 75){
        obj[car][1]+=fuel
        console.log(`${car} refueled with ${fuel} liters`)
    }else if(total > 75){
    for(let i = oldFuel ; i <  75 ; i++){
         countFuel++
         fuel--
    }
    obj[car][1]+=countFuel
    console.log(`${car} refueled with ${countFuel} liters`)
   }
   }else if(tokens.includes('Revert')){
        let car = tokens[1]
        let km = tokens[2]
        obj[car][0]-=km
        if(obj[car][0] < 10000){
            obj[car][0] = 10000
        }else{
            console.log(`${car} mileage decreased by ${km} kilometers`)
        }
   }

    line = arr.shift()
}
let sorted = Object.entries(obj).sort((a,b) => b[1][0] - a[1][0]
|| a[0].localeCompare(b[0]))

for(let line of sorted){
    console.log(`${line[0]} -> Mileage: ${line[1][0]} kms, Fuel in the tank: ${line[1][1]} lt.`);
}
}
speed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )
