function store(arr){

    let sum = 0
    let taxes = 0
    let total = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].includes('special')){
            taxes = sum * 0.20
            total = (sum + taxes)*0.90
        }else if(arr[i].includes('regular')){
            taxes = sum * 0.20
            total = sum + taxes
        }else{
            if(Number(arr[i]) < 0){
                console.log(`Invalid price!`)
                continue;
            }else{
            sum+= Number(arr[i])
            }
       }
    }
    if(sum<=0){
        console.log(`Invalid order!`);
    }else{
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${total.toFixed(2)}$`)
    }


}
store([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]
    
    )