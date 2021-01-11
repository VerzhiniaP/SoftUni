function racing(fuel, fuelUsed, round) {
    fuel = Number(fuel)
    round = Number(round)
    fuelUsed = Number(fuelUsed)

    for (let i = 0 ; i < round; i++) {
        
        fuel -= fuelUsed - 0.1;

        if ( fuel <= 0) {
            console.log(`You are out of fuel in round ${i}!`);break;
        }
    }


    if(fuel > 0) {
        console.log(`Congrats! You won the race!`)
    }

}

racing ("50", "4.3", "30")