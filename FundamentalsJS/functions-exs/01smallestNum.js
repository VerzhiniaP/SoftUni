function smallestNum(numOne, numTwo, numThree){

    let smallest = Number.MAX_SAFE_INTEGER
 
    smallest = small(numOne, smallest)
    smallest = small(numTwo, smallest)
    smallest = small(numThree, smallest)

    function small(num, small){

        if(num < small){
            small = num
        }
        return small
    }

    return smallest


}
console.log(smallestNum(600, 342, 123))