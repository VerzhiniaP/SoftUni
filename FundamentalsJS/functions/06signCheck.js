function signCheck(numOne, numTwo, numThree){

    let sum1 = check(numOne, numTwo)
    let sum2 = check(sum1, numThree)

    if(sum2 >= 0){
        return 'Positive'
    }else{
        return 'Negative'
    }
    
    function check(x, y){
        let multiply = x * y
      return multiply
    }

}
console.log(signCheck(15, -8, 18))