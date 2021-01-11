function fitness(sum, gender, age, sport){

    sum = Number(sum)
    age = Number(age)
    let price = 0

    if(gender == "m"){
        switch(sport) {
            case "Gym" : price = 42 ;break;
            case "Boxing" : price = 41 ;break;
            case "Yoga" : price = 45 ;break;
            case "Zumba" : price = 34 ;break;
            case "Dances" : price = 51 ;break;
            case "Pilates" : price = 39 ;break;
        }
    } else if(gender== "f") {
        switch(sport) {
            case "Gym" : price = 35 ;break;
            case "Boxing" : price = 37 ;break;
            case "Yoga" : price = 42 ;break;
            case "Zumba" : price = 31 ;break;
            case "Dances" : price = 53 ;break;
            case "Pilates" : price = 37 ;break;
        }

    }
    if (age <= 19){
        price*= 0.80
    }
    let money = price - sum

    if(price <= sum) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {

        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`)
    }

}
fitness(20,
    "f",
    15,
    "Yoga"
     )