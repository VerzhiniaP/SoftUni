function mobile(arg1, arg2, arg3, arg4) {
    let year = arg1
    let type = arg2
    let data = arg3
    let months = Number(arg4)
    let price = 0

    if(year === "one"){
        switch(type) {
            case "Small" : price = 9.98 ;
            if(data === "yes"){
                price+=5.50
            }else {
                price
            } break;
            case "Middle" : price = 18.99 
            if (data === "yes"){
                price+=4.35
            }else{
                price
            } break ;
            case "Large" : price = 25.98
            if (data === "yes"){
                price+=4.35
            }else{
                price
            } break ;
            case "ExtraLarge" :  price = 35.99 
            if (data === "yes"){
                price+=3.85
            }else{
                price
            } break ;         
        }

    }else {
        switch(type) {
            case "Small" : price = 8.58 
            if(data === "yes"){
                price+=5.50
            }else {
                price } break
            case "Middle" : price = 17.09
            if (data === "yes"){
                price+=4.35
            }else{
                price
            } break ;
            case "Large" : price = 23.59 
            if (data === "yes"){
                price+=4.35
            }else{
                price
            } break ;
            case "ExtraLarge" :  price = 31.79 
            if (data === "yes"){
                price+=3.85
            }else{
                price
            } break ;          
        } 
        
            price-= price * 0.0375
        

    }
    let total = price * months
    console.log(`${total.toFixed(2)} lv.`)

}
mobile("two", "Large", "no", "10")