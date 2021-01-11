function energy (fruit, type, count) {

    
    
    count = Number(count)
    let result = 0
    let price = 0

    if (type == "small") {
       
        switch(fruit){
            case "Watermelon": price = 56.00 ; break
            case "Mango" : price = 36.66 ; break
            case "Pineapple" : price = 42.10 ; break
            case "Raspberry" : price = 20 ;break
        }
        result = price * 2

    }else if (type == "big") {
        
        switch(fruit){
            case "Watermelon": price = 28.70 ; break
            case "Mango" : price = 19.60 ; break
            case "Pineapple" : price = 24.80 ; break
            case "Raspberry" : price = 15.20 ;break
        }
        result = price * 5
        

    }

    

    let total = result * count;

    if(total >= 400 && total <= 1000) {
        total*=0.85
    }else if ( total > 1000) {
        total*= 0.50
    }

    console.log(`${total.toFixed(2)} lv.`)

    

}
energy("Raspberry",
"small",
50
    
    )