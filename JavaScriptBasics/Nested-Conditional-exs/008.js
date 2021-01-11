function exam (examHour, examMinutes, arriveHour, arriveMinutes) {
    
 
    let examTotalMinutes = (examHour * 60) + examMinutes;
    let arriveTotalMinutes = (arriveHour * 60) + arriveMinutes;
 
    let arrive;
    let time;
    let text;
    let timeHour;
 
    if (arriveHour > examHour) {
        arrive = "Late";
        timeHour = Math.floor((arriveTotalMinutes - examTotalMinutes) / 60);
        time = (arriveTotalMinutes - examTotalMinutes) % 60;
 
        if (timeHour === 0) {
            text = (`${time} minutes after the start`);
 
        }else {
        text = (`${timeHour}:${time} hours after the start`);
        }
 
    }else if ((arriveHour === examHour) && (arriveMinutes > examMinutes)){
        arrive = "Late";
        time = arriveMinutes - examMinutes;
        text = (`${time} minutes after the start`);
   
    }else if (arriveHour === examHour && arriveMinutes === examMinutes) {
        arrive = "On Time";
        text = "";
   
    }else if((arriveHour < examHour) && (((60-arriveMinutes) + examMinutes) <= 30)) {
        arrive = "On Time";
        time = (examTotalMinutes - arriveTotalMinutes) % 60;
        text = (`${time} minutes before the start`);
 
    }else if (arriveHour < examHour && (((60-arriveMinutes) + examMinutes) > 30)) {
        arrive = "Early";
        timeHour = Math.floor((examTotalMinutes - arriveTotalMinutes) / 60);
        time = (examTotalMinutes - arriveTotalMinutes) % 60;
 
        if (time < 10) {
            text = (`${timeHour}:0${time} hours before the start`);
       
        }else if (timeHour === 0) {
            text = (`${time} minutes before the start`);
        }else {
            text = (`${timeHour}:0${time} hours before the start`);
        }
    }
 
    console.log(arrive);
    console.log(text);
 
}
exam ( "9", "00", "8", "30")