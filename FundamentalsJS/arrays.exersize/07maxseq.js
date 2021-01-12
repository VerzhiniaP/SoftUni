function max(arr){

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let current = [arr[i]]
        
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                current.push(arr[j])
            }else{
                break;
            }
            
        }
        if(newArr.length < current.length){
            newArr = current
        }
    }
console.log(newArr.join(' '))
}
max([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])