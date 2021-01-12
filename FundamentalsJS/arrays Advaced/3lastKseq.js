function lastK(n, k){
    let arr = [1]

    for(let i = 1 ; i < n ; i++){
        let lastK = arr.slice(-k)
        let sum = 0
        for(let j = 0 ; j < lastK.length ; j++){
            sum+= lastK[j]
        }
        arr.push(sum)
    }
    console.log(arr.join(' '))
   

}
lastK(6, 3)