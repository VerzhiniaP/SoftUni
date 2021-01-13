function radar(speed, area){

    let speedLimit = 0
    let diff = 0
    switch(area){
        case 'motorway' : speedLimit = 130 
        if(speed > speedLimit){
            diff = speed - speedLimit
            if(diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            }else if(diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            }else if(diff > 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
            }else{
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } break;
        case'interstate' : speedLimit = 90
        if(speed > speedLimit){
            diff = speed - speedLimit
            if(diff <= 20){
              console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            }else if(diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            }else if(diff > 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
            }else{
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } break;
        case 'city' : speedLimit = 50
        if(speed > speedLimit){
            diff = speed - speedLimit
            if(diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            }else if(diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            }else if(diff > 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
            }else{
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }  break;
        case 'residential' : speedLimit = 20
        if(speed > speedLimit){
            diff = speed - speedLimit
            if(diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            }else if(diff > 20 && diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            }else if(diff > 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
            }else{
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }  break;

    }
}
radar(21, 'residential')