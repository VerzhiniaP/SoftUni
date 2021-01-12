function sum(arr){

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);

        if(element % 2 == 0){

            sum+=element
        }else{
            continue
        }
        
    }
    console.log(sum)

}
sum(['1', '2', '3', '4', '5', '6'])