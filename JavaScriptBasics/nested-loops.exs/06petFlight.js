function flight(input){
    let flightCount = Number(input[0])
    let max = Number.MIN_SAFE_INTEGER
    let winner = ""
    let bestResult = ""
    let index = 1
    let avr = 0
  

    for(j = 1 ; j <= flightCount ; j++){
       
        let name = input[index]
        winner = name
        index++
        let count = 0
        let totalPeople = 0
        while(name !== 'Finish') {
           let peopleCount = Number(input[index])
            totalPeople+= peopleCount
            count++
            avr = totalPeople / count
            
            if(avr > max){
                max = avr
                bestResult = winner
            }

            index++
            name = input[index]
        }
        console.log(`${winner}: ${(Math.floor(avr))} passengers.`)
        
        index++
        name = input[index]
    }
 
    
    console.log(`${winner} has most passengers per flight: ${(Math.floor(max))}`)
}
flight([
    '3',           'WizzAir',
    '180',         '230',
    '100',         'Finish',
    'BulgariaAir', '50',
    '60',          '90',
    'Finish',      'Lufthansa',
    '260',         '320',
    'Finish',      ''
  ]
  
  
  )