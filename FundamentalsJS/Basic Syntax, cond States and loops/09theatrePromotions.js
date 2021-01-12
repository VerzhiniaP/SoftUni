function promo(arg1, arg2){

    let age = Number(arg2)
    let day = arg1

    let price = 0

    let isError = false

    switch(day){
        case "Weekday" : 
        if(age >=0 && age <= 18){
            price = 12
        }else if(age >= 18 && age <= 64){
            price = 18
        } else if( age > 64 && age <= 122){
        price = 12
        }else{
            console.log(`Error!`)
            isError = true
            break;
        }
        break;
        case "Weekend" : 
        if(age >=0 && age <= 18){
            price = 15
        }else if(age >= 18 && age <= 64){
            price = 20
        } else if( age > 64 && age <= 122){
        price = 15
        }  else{
            console.log(`Error!`)
            isError = true
            break;
        } break;
        case "Holiday" : 
        if(age >=0 && age <= 18){
            price = 5
        }else if(age >= 18 && age <= 64){
            price = 12
        } else if( age > 64 && age <= 122){
        price = 10
        } else{
            console.log(`Error!`)
            isError = true
            break;
        } break;

    }


    if(!isError){
        console.log(`${price}$`)
    }
}
promo("Holiday", 15)