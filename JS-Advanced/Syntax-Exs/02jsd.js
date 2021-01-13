function jsd(numOne,numTwo){
    let maxNum = Number.MIN_SAFE_INTEGER
    let division = 0
    for(let i = 0 ; i <= 10 ; i++){
        if(numOne % i == 0 && numTwo % i == 0){
            division = i
            if(maxNum < division){
                maxNum = division
            }
        }
    }
console.log(maxNum);
}
jsd(2154, 458)