function factoriel(numOne, numTwo){

    let sumOne = 1
    let sumTwo = 1
    for(let i = 2 ; i <= numOne  ; i++){
        sumOne*=i
    }
    for(let j = 2 ; j <= numTwo  ; j++){
        sumTwo*=j
    }
    let result = 0
    result = sumOne / sumTwo

    return result.toFixed(2)

}
console.log(factoriel(6, 2))