function basketball(input){
    i = 0
    let name = input[i]
    let diff = 0
    let count = 0
    let totalMatches = 0
    let winCount = 0
    let loseCount = 0

    while(name !== "End of tournaments"){
        i++
        let matchNumber = Number(input[i])
        totalMatches+= matchNumber
        i++
        for(i = 1; i <= matchNumber ; i++){
            count++
            
            let result1 = Number(input[i])
            let result2 = Number(input[i + 1])

            if(result1 > result2){
                winCount++
                diff = result1 - result2
                console.log(`Game ${count} of tournament ${name}: win with ${diff} points.`)

            }else{
                loseCount++
                diff = result2 - result1
                console.log(`Game ${count} of tournament ${name}: lost with ${diff} points.`)
                
            }

        }
    
    }



}
basketball([
    'Dunkers',            '2',
    '75',                 '65',
    '56',                 '73',
    'Fire Girls',         '3',
    '67',                 '34',
    '83',                 '98',
    '66',                 '45',
    'End of tournaments', ''
  ]
  )