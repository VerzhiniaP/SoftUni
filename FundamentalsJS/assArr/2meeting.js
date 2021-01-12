function meeting(arr){

    let assObj = {}
    for (let line of arr) {
        let[weekDay,name] = line.split(' ')
       if(assObj.hasOwnProperty(weekDay)){
           console.log(`Conflict on ${weekDay}!`);
       }else{
           console.log(`Scheduled for ${weekDay}`);
           assObj[weekDay] = name
       }
        
    }
    for (let line in assObj) {
        console.log(`${line} -> ${assObj[line]}`);
    }
}
meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']

)