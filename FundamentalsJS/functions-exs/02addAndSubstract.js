function sum(numOne, numTwo, numThree){

    let sum = 0
    sum = numOne + numTwo
    sum = substract(sum, numThree)
    function substract(sum, num){
        return sum - num
    }
        return sum
}
console.log(sum(23, 6, 10))