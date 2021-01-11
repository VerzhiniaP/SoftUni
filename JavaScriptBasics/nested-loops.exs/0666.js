function flight(input){
    let flightCount = Number(input[0])
    let max = Number.MIN_SAFE_INTEGER
    let winner = ""
    let index = 1
    let avr = 0
  

    for(j = 1 ; j <= flightCount ; j++){
       
        let name = input[index]
        index++
        let peopleCount = input[index]
        let count = 0
        let totalPeople = 0
        while(peopleCount !== 'Finish') {
           peopleCount = Number(input[index])
            totalPeople+= peopleCount
            count++
            avr = totalPeople / count
            if(avr > max){
                max = avr
                winner = name
            }

            index++
            peopleCount = input[index]
        }
        console.log(`${name}: ${(Math.trunc(avr))} passengers.`)
        name = input[index]
        index++
    }
 
    
    console.log(`${winner} has most passengers per flight: ${(Math.trunc(max))}`)
}
flight(['WizzAir',
'180',         '230',
'100',         'Finish',])