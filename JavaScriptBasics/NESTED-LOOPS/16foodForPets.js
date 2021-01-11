function food(input) {
    index = 0
    let name = input[index]
    let bestResult = Number.MIN_SAFE_INTEGER
    let hatTrick = 0

    while(name !== 'END' ){
        index++
        let score = Number(input[index])
        let bestPlayer = input[name]

        if(score >= 3) {
            hatTrick++
        }

        if(score >= 10) {
            bestResult = score
            break;
        }
        if(score > bestResult) {
            bestResult = score
        }


        index++
        name = input[index]

    }

    console.log(`${name} is the best player!`)
    if(hatTrick) {
        console.log(`He has scored ${bestResult} goals and made a hat-trick !!!`)
    }else{
        console.log(`He has scored ${bestResult} goals.`)
        
    }

}
food([
    'Neymar',  '2',
    'Ronaldo', '1',
    'Messi',   '3',
    'END',     ''
  ])