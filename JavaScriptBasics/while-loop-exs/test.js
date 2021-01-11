function cake (input) { 
    index = 0
    let w = Number(input[index])
    index++
    let h = Number(input[index])
    index++
    cakeSize = w * h
    let command = input[index]
    index++

    while (command !== 'Stop') {
        let pieceOfCake = Number(command)
        cakeSize-=pieceOfCake

        let pieceNotEnough = Math.abs(cakeSize - pieceOfCake)
        if(pieceOfCake > cakeSize) {
            console.log(` No more cake left! You need ${pieceNotEnough} pieces more.`)
        }

        command = input[index]
        index++
    }

    if (command === 'Stop') {
        console.log(`${pieceOfCake} pieces are left.`)
    }

}
cake(
    [
        '10', '10',
        '20', '20',
        '20', '20',
        '21'
      ]
)