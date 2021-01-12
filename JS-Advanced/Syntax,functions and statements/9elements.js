function elements(arr){

    let sumOne = 0
    let sumTwo = 0
    let totalSumTwo = 0
    let sumThree = ''
    for (let num of arr) {
        sumOne+=num
        sumTwo = 1 / num
        totalSumTwo += sumTwo
        sumTwo = 0
       sumThree+=num
    }
    
    console.log(sumOne)
    console.log(totalSumTwo)
    console.log(sumThree);

}
elements([2,4,8,16])