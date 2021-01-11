function ski(day, type, grade) {

    day=Number(day);
    let price = 0
    

    switch (type) {
        case "room for one person" : 
        price = (day - 1) * 18.00 ;
         break;

        case "apartment":
        price = (day - 1) * 25.00;
        if(day < 10) {
            price = price * 0.70;
        } else if (day >= 10 && day <= 15) {
            price = price * 0.65;
        } else {
            price = price * 0.50;
        } break ;
        
         case "president apartment" :
            price = (day - 1) * 35.00;
            if(day < 10) {
                price = price * 0.90;
            } else if (day >= 10 && day <=15) {
                price = price * 0.85 ;
            }else {
                price = price * 0.80;
            } 
            break ;

                
                
           }

        if (grade === "positive") {
            price = price * 1.25;
        } else {
            price = price * 0.90;
        }

        console.log(price.toFixed(2));
        

    }
   
    

ski("14",
"apartment",
"positive")