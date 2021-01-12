function vacation(arg1, arg2, arg3){

    let group = Number(arg1)
    let type = arg2
    let day = arg3

    let price = 0

    switch(type){
        case "Students" :
            if(day == "Friday"){
                price = 8.45
            }else if(day == "Saturday"){
                price = 9.80
            }else if(day == "Sunday"){
                price = 10.46
            } break ;
             case "Bussiness" :
                if(day == "Friday"){
                    price = 10.90
                }else if(day == "Saturday"){
                    price = 15.60
                }else if(day == "Sunday"){
                    price = 16
                } break ;
                case "Regular" :
                    if(day == "Friday"){
                        price = 15
                    }else if(day == "Saturday"){
                        price = 20
                    }else if(day == "Sunday"){
                        price = 22.50
                    } break ;
                 
    } 

    let total = 0
    total = group * price

   if(type == "Students") {
        if(group >= 30){
        total*= 0.85} 
    }else if(type == "Bussiness"){
        if(group >= 100){
            total*=0.90
        }
    }else if(type == "Regular"){
        if(group >= 10 && group <= 20){
            total*=0.95
        }
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}
vacation("40", "Regular", "Saturday")