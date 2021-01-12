function merge(arr1, arr2){

    for(let i = 0 ; i < arr1.length ; i++){
        let element = arr1[i]
        for(let j = 0 ; j < arr2.length ; j ++){
            let element2 = arr2[j]

            if(element === element2){
                console.log(element)
            }else{
                continue
            }
        }
    }

}
merge([
    'S', 'o', 'f',
    't', 'U', 'n',
    'i', ' '
  ], [ 's', 'o', 'c', 'i', 'a', 'l' ])