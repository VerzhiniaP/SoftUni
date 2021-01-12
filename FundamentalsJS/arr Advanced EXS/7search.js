function search(arr1, arr2){
    let numTake = arr2[0]
    let deleteNum = arr2[1]
    let searchNum = arr2[2]
    let count = 0
    let newArr = arr1

    while(newArr.includes(searchNum)){
        count++
    newArr = arr1.slice(0,numTake)
    newArr.splice(0,deleteNum)
    index = newArr.indexOf(searchNum)
    newArr.splice(index,1)
    }
   console.log(`"Number ${searchNum} occurs ${count} times."`)

}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    
    )