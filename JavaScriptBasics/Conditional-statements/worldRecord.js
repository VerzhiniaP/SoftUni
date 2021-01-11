function worldRecord(recordS, distanceM , timeS) {

    recordS = Number(recordS);
    distanceM = Number(distanceM);
    timeS = Number(timeS);

    let totalTime = distanceM * timeS;
    let late = Math.floor(distanceM / 15 ) * 12.5;
    ivanTime = totalTime + late;
    

    if (ivanTime < recordS) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    } else if (ivanTime >= recordS) {
        let diff = ivanTime - recordS;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}
worldRecord("10464",
"1500",
"20")