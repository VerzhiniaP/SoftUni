function latin(n){

    for(let i = 0 ; i < n ; i++){
        let letter = String.fromCharCode(97 + i)
        for(let j = 0 ; j < n ; j++){
            let letter2 = String.fromCharCode(97 + j)
            for(let k = 0 ; k < n ; k++){
                let letter3 = String.fromCharCode(97 + k)
                
                console.log(`${letter}${letter2}${letter3}`)
            }
        }
    }

}
latin(3)