function nameGame(input){
    
    index = 0
    let text = input[index]
    let bestPoints = 0
    let winner = ""

    while( text !== 'Stop') {
        text = input[index]
        let currentPoints = 0
       
        for(i = 0 ; i < text.length ; i++){
            let letter = text[i]
            let num = Number(input[index])
            if(num == letter){
                currentPoints+= 10

            }else {
                currentPoints+= 2
            }
           
        }
        if(currentPoints >= bestPoints){
            bestPoints = currentPoints
            winner = name
        }
        index++
        text = input[index]

}
console.log(`The winner is ${winner} with ${bestPoints} points!`)

}
nameGame([
    'Ivan', '73',  '20',
    '98',   '110', 'Ivo',
    '80',   '65',  '87',
    'Stop'
  ]
  )