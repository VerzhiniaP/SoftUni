function fruitOrVeggie(product) {


    switch(product) {
            case "banana" :
            case "apple" :
            case "kiwi" : 
            case "cherry" : 
            case "lemon":
            case "grapes": console.log("fruit"); break;
            case "tomato": 
            case "pepper":
            case "carrot":
            case "cucumber" : console.log("vegetable"); break;
            default: console.log("unknown"); break;
                
    
        }
    }
    fruitOrVeggie("banana")