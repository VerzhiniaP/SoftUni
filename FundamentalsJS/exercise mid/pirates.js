function pirates(days, dayPlunder,expectedPLunder){

    days = Number(days)
    dayPlunder = Number(dayPlunder)
    expectedPLunder = Number(expectedPLunder)

    let sum = 0
    let counter = 0
    for(let i = 0 ; i < days ; i++){
        counter++
       sum+= dayPlunder
       if(counter % 3 == 0){
           sum+= dayPlunder*0.5
       }
       if(counter % 5 == 0){
           sum*=0.70
       }
    }
    if(sum >= expectedPLunder){
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    }else{
       let percent = 0
       percent = sum / expectedPLunder * 100
       console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}
pirates(10,20,380)