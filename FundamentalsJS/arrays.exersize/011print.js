function print(arr){

    let step = Number(arr[arr.length - 1])
    

    let print = [arr[0]]

    for(let i = 1 ; i < arr.length - 1 ; i++){

        if(i % step == 0){
            print.push(arr[i])
        }
    }
console.log(print.join(' '))
}
print([ '1', '2', '3', '4', '5', '6' ])