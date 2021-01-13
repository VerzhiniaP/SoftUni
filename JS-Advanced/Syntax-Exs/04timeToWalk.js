function walk(steps, footLength,speed){


    let speedSec = speed/3.6
    let distance = steps * footLength
    let time = distance / speedSec
    let late = Math.floor(distance / 500)
    let hours = Math.floor(time /3600)
    let minutes = Math.floor((time - hours) / 60) 
    let sec = Math.round(time - (minutes * 60))
    
    
    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + late < 10 ? "0" : "") + (minutes + late) + ":" + (sec < 10 ? "0" : "") + sec);



   
    

}
walk(2564, 0.70, 5.5)