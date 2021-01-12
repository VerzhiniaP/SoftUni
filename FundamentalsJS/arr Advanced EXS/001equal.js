function equal(arr){

    
    let counter = 0
    for(let rowOne = 0 ; rowOne < arr.length ; rowOne++){
        let first = arr[rowOne]
        for(let rowTwo = rowOne + 1 ; rowTwo < arr.length ; rowTwo++){
            let second = arr[rowTwo]

            for(let i = 0 ; i < first.length ; i++){
                if(first[i] === second[i]){
                    counter++
                }
                if(first[i] === first[i + 1]){
                    counter++
                }
                if(second[i] === second[i + 1]){
                    counter++
                }
                
            }
            break
        }
    }
    console.log(counter);

}
equal([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
