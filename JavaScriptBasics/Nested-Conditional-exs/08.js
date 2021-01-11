function exam( hizpit, mizpit, hpristiga , mpristiga) {
    hpristiga = Number(hpristiga);
    mpristiga = Number(mpristiga);
    hizpit = Number(hizpit);
    mizpit = Number(mizpit);
 
    //minavame v minuti
 
    let a = hizpit * 60 + mizpit;
    let b = hpristiga * 60 + mpristiga;
    let x;
    let hour;
    let mm;
 
    //osnoven if
 
    if (a = b) {
        console.log("On time")
    } else if ((b < a) <= 30) {
        console.log("On time") 
        x = (a - b)
        console.log(`${x} minutes before the start`)
        
    
    } else if ((b < a) > 30 ) {
        console.log("Early")
        if ((a - b) < 60) {
            x = a - b
            console.log(`${x} minutes before the start`)

        } else if ((a - b) >= 60) {
            x = a - b
            hour = Math.floor(x / 60)
            mm = Math.floor( x % 60)
            console.log(`${hour}:0${mm} hours before the start`)

        }

        } else if (b > a) { 
        console.log("Late") 
        if ((b - a) < 60 ) {
            x = b - a
            console.log(`${x} minutes after the start`)
        }else if ((b - a) >= 60) {
            x = b - a
            hour = Math.floor(x / 60)
            mm = Math.floor(x % 60) 
            console.log(`${hour}:0${mm} hours after the start`)
        }
    }
 
 
} 
exam ("9", "30" , "9" , "50")
