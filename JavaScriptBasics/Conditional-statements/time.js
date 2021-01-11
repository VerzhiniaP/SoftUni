function time(hour, min) {
    hour = Number(hour);
    min = Number(min);

    min = min + 15;
    hour = hour + Math.floor(min/60);
    hour = hour % 24
    min = min % 60;
    
    if (min < 10) {
        console.log(`${hour}:0${min}`);
    } else {
        console.log(`${hour}:${min}`);
    }
}
 time ("0", 
 "01") 