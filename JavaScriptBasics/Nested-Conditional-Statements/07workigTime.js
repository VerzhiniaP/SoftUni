function time(hour, day) {

    hour=Number(hour);

        switch(day) {
            case "Monday" :
            case "Tuesday" :
            case "Wednesday" : 
            case "Thursday" : 
            case "Friday": 
            case "Saturday" :
                 if ( hour >=10 && hour <= 18 ) {
                  console.log("open") ; break ; }
            case "Sunday" : console.log("closed") ; break;
            
           } 
    
    
}
time("11", "Monday")