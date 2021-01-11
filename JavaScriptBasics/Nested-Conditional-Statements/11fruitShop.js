function fruitShop(fruit, day, quantity) {

    quantity = Number(quantity);
    
      let result = 0;
    
        switch(day) { 
            case "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" : 
            switch (fruit) {
        case "banana" : result = quantity * 2.50;
        case "apple" : result = quantity * 1.20; 
        case "orange" : result = quantity * 0.85; 
        case "grapefruit" : result = quantity * 1.45; 
        case "kiwi" : result = quantity * 2.70; 
        case "pineapple" : result = quantity * 5.50; 
        case "grapes" : result = quantity * 3.85; console.log(result.toFixed(2)) ; 
        break ;
        default : console.log("error") ; break ;
        
        
      } break;
      
      
    case "Saturday" || "Sunday" : 
    
        switch(fruit) {
            case "banana" : result = quantity *2.70; 
            case "apple" : result = quantity * 1.25; 
            case "orange" : result = quantity * 0.90; 
            case "grapefruit" : result = quantity *1.60; 
            case "kiwi" : result = quantity * 3.00; 
            case "pineapple" : result = quantity * 5.60; 
            case "grapes" : result = quantity * 4.20; console.log(result.toFixed(2)) ; 
            break ;
            default : console.log("error") ; break ;
           
            
         } break ;
        
    
    

    
        }
    

       }
fruitShop( "banana", "Tuesday", "2")