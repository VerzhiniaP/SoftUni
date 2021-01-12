function sort(arr){

    let newArr = []
    let dublicate = arr
    let num = arr.length

    for(let i = 0 ; i < num ; i++){
        if(i % 2 == 0){
            dublicate.sort((a,b) => b - a)
            newArr.push(dublicate[0])
            dublicate.splice(0,1)
            
        }else{
            dublicate.sort((a,b) => a - b)
            newArr.push(dublicate[0])
            dublicate.splice(0,1)
            
        }
    }
console.log(newArr.join(' '))
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])