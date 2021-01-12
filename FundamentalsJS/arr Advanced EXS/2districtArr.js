function district(arr){
  
    for(let i = 0 ; i < arr.length ; i++){
        let element1 = arr.indexOf(arr[i], i+1)

        if(element1 !== -1){
            arr.splice(element1, 1)
        }
    }

    console.log(arr.join(' '))
}
district([1, 1 ,1])