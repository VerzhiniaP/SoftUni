function odd(arr){

    let newArr = []

    for(let i = 0 ; i < arr.length ; i++){
        let element = arr[i]

        if(i % 2 == 0){
            continue
        }else{
            newArr.push(element)
        }
    }
    let double = newArr.map(x => x *2)
    let reversed = double.reverse().join(' ')
    console.log(reversed)
        
    }
odd([10, 15, 20, 25])