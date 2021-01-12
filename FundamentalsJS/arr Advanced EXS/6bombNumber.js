function bomb(arr1, arr2){
    
    let bombNum = arr2[0]
    let deleteNum = arr2[1]

   while(arr1.includes(bombNum)){
    let index = arr1.indexOf(bombNum)
    arr1.splice(index + 1 , deleteNum)
    arr1.splice(index - deleteNum,deleteNum)
    let newIndex = arr1.indexOf(bombNum)
    arr1.splice(newIndex,1)
   }

    let sum = 0
    for (let num of arr1) {
        sum+=num
        
    }
    console.log(sum);
    

}
bomb([1, 7, 7, 1, 2, 3],
    [7, 1]
    )
