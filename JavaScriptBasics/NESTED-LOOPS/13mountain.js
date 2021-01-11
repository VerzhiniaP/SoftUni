function mountain(arg1, arg2, arg3){
    let secondsRecord = Number(arg1)
    let distanceMeter = Number(arg2)
    let timeUpSec = Number(arg3)

    let timeGeorge = timeUpSec * distanceMeter
    let late = Math.floor(distanceMeter / 50) * 30
    

    let totalTime = timeGeorge + Math.floor(late)

    let diff = secondsRecord - totalTime

    if(totalTime < secondsRecord) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${Math.abs(diff).toFixed(2)} seconds slower.`)
    }



}
mountain (5554.36,
    1340,
    3.23
    )