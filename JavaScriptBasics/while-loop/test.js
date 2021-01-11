function solve(input) {
    let w = Number(input[0])
    let l = Number(input[1])
    let h = Number(input[2])
    index = 3
    let boxCount = Number(input[index])
    index++
    let volume = w * l * h
    let freeSpace=0

    while(boxCount !== 'Done'){ 
        freeSpace = volume - boxCount
        boxCount+=boxCount
        if ( volume > freeSpace) {
            console.log(`No ore free space`) 
            
        }
        boxCount =input[index]
        
        index++
        
    }
    if (boxCount = 'Done') {
        if(freeSpace >= volume) {
            console.log(`${freeSpace}  left`)
        }
    }
    
    
}

solve([ '10', '1', '2', '4', '6', 'Done' ]
  )