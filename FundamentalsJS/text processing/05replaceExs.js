function replace(str){

    let arr = str.split('')
    for (let i = 0 ; i < arr.length  ; i++) {
        let letter = arr[i]
        
        for(let j = i+ 1 ; j < arr.length ; j++){
            let nextLetter = arr[j]
            
            if(letter == nextLetter){
                arr.splice(j,1)
                j--
            }else{
                break
            }
        }
    }
    console.log(arr.join(''));
}
replace('qqqwerqwecccwd')