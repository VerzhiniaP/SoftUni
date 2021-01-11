function addBags(arg1, arg2, arg3) {
    let count = Number(arg1)
    let type = arg2
    let delivery = arg3

    let price = 0
    let result = 0
    let isValid = false

   
    switch (type) {
        case "90X130" : price = 110 
        if (count > 30 && count <= 60) {
            price*= 0.95
        }else if (count > 60) {
            price*= 0.92
        }break ;
        case "100X150" : price = 140
        if(count > 40 && count <= 80) {
            price*=0.94
        }else if (count > 80) {
            price*=0.90
        }  break ; 
        case "130X180" : price = 190
        if(count > 20 && count <= 50){
            price*=0.93
        } else if(count > 50){
            price*=0.88
        } break ;
        case "200X300" : price = 250
        if(count > 25 && count <= 50){
            price*=0.91
        }else if(count > 50){
            price*=0.86
        } break ;
    
    }
    if(count < 10){
    console.log(`Invalid order`)
    isValid = true
        }
    
    result = count * price
    

    if(delivery == "With delivery"){
        result+= 60
    }else{
        result
    }
    if(count > 99){
        result*=0.96
    }

    if(!isValid){
    console.log(`${result.toFixed(2)} BGN`)
    }


   
}
addBags("40",
    "90X130",
  "Without delivery" )