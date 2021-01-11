function hundredToTwoHundred(arg) {
    arg = parseInt(arg);

    if (arg < 100) {
        console.log("Less than 100")
    } else if ( arg >= 100 && arg <= 200) {
        console.log ("Between 100 and 200")
    } else {
        console.log ("Greater than 200")
    }
    
    

}

hundredToTwoHundred("120")