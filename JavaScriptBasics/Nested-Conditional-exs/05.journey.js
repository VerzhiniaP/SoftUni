function journey(budget, season) {
    budget = Number(budget);

    let result = 0;
    let place = "";
    let destination = "";
    
    if(budget <=100 ) {
        destination = "Bulgaria";
        if (season === "summer"){
            result = budget * 0.3;
            place = "Camp";
        } else {
            result = budget * 0.7;
            place = "Hotel";
        }

    } else if (budget <=1000){
        destination = "Balkans";
        if (season === "summer"){
            result = budget * 0.4;
            place = "Camp";
        }else {
            result = 0.8 * budget;
            place = "Hotel";
    
        }

     } else {
        destination = "Europe";
        result = 0.9 * budget;
        place = "Hotel";
}

console.log(`Somewhere in ${destination} `);
console.log(`${place} - ${result.toFixed(2)}`);


}
journey("312", "summer")
