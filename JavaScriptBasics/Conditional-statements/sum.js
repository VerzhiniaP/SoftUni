function sum(timeFirst, timeSecond, timeThird) {
    timeFirst = Number(timeFirst);
    timeSecond = Number(timeSecond);
    timeThird = Number(timeThird);
    

    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sum("35",
"45",
"44")