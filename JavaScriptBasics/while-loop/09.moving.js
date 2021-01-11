function hose(input){
    let index = 0
    let w = Number(input[index])
    index++
    let l = Number(input[index])
    index++
    let h = Number(input[index])
    
    index++
    let volume = w * l * h
    let command=input[index]

    index++

    while(command !== "Done"){
        let box = Number(command)
        volume-=box
        if(volume < 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
            break;
        }

        command = input[index]
        
    }
    if (volume >= 0) {
        console.log(`${volume} Cubic meters left.`)
    }

}
hose([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122'
  ]
  )
