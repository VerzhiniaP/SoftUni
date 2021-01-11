function exam (hourExam, minuteExam, hourArrive, minuteArrive) {

    hourExam = Number(hourExam)
    minuteExam = Number(minuteExam)
    hourArrive = Number(hourArrive)
    minuteArrive = Number (minuteArrive)

    let examTotalMinutes = (hourExam * 60) + (minuteExam);
    let arriveTotalMinutes = (hourArrive * 60) + (minuteArrive);

    let arrive = ""
    let diff;
    let hourD;
    let minuteD;

    if (examTotalMinutes = arriveTotalMinutes) {
        console.log("On time")
    } else if (examTotalMinutes > arriveTotalMinutes) {
        if ((examTotalMinutes - arriveTotalMinutes) < 30){
            console.log("On time");
            diff = (examTotalMinutes - arriveTotalMinutes);
            console.log(`${diff} minutes before the start`)

        } else if (((examTotalMinutes - arriveTotalMinutes) > 30) && ((examTotalMinutes- arriveTotalMinutes) > 60)) {
            console.log("Early");
            diff = (examTotalMinutes - arriveTotalMinutes);
            hourD = (Math.floor(diff / 60));
            minuteD = (Math.floor(diff % 60));
            if (minuteD < 10) {
                console.log(`${hourD}:0${minuteD} hours before the start`)
            } else {
                console.log(`${hourD}:${minuteD} hours before the start`)
            }

        }

    }
    else if (arriveTotalMinutes > examTotalMinutes) {
        console.log("Late") ;
        if ((arriveTotalMinutes - examTotalMinutes) < 60) {
            diff = (arriveTotalMinutes - examTotalMinutes);
            console.log(`${diff} minutes after the start`)
        } else if ((arriveTotalMinutes - examTotalMinutes) >= 60) {
            diff = (arriveTotalMinutes - examTotalMinutes);
            hourD = (Math.floor(diff/60));
            minuteD = (Math.floor(diff % 60));
            if (diff < 10){
                console.log(`${hourD}:0${minuteD} hours after the start`)
            } else {
                console.log(`${hourD}:${minuteD} hours after the start`)
            }
        }
    }

    }





exam ( "9", "00", "8", "30")