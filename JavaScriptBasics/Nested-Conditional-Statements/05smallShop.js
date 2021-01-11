function smallShop(product, town, quantity) {

    quantity = Number(quantity);
    let totalPrice = quantity * product;

    switch (town) {
        case "Sofia":
            switch (product){
                case "coffee": totalPrice = quantity * 0.50; break;
                case "water" : totalPrice = quantity * 0.80; break;
                case "beer" : totalPrice = quantity * 1.20; break;
                case "sweets" :totalPrice = quantity * 1.45; break;
                case "peanuts" :totalPrice = quantity * 1.60; break;
            } break;
            case "Plovdiv":
                switch (product) {
                case "coffee": totalPrice = quantity * 0.40; break;
                case "water" : totalPrice = quantity * 0.70; break;
                case "beer" : totalPrice = quantity * 1.15; break;
                case "sweets" :totalPrice = quantity * 1.30; break;
                case "peanuts" :totalPrice = quantity * 1.50; break;

                } break;
                case "Varna" :
                    switch(product) {
                case "coffee": totalPrice = quantity * 0.45; break;
                case "water" : totalPrice = quantity * 0.70; break;
                case "beer" : totalPrice = quantity * 1.10; break;
                case "sweets" :totalPrice = quantity * 1.35; break;
                case "peanuts" :totalPrice = quantity * 1.55; break;

                } break;


                    }
                    console.log(totalPrice);
}



smallShop( "peanuts" , "Plovdiv", "1")