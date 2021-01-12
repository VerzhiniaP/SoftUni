function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let tripPrice = Number(arg1);
    let puzzles = Number(arg2);
    let dolls = Number(arg3);
    let bears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);
    let sum = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    toys = puzzles + dolls + bears + minions + trucks;
 
   let result = tripPrice - sum
    if (toys >= 50); {
        sum =sum * 0.75;
 
    }
    sum =sum * 0.90;
     if (tripPrice <= sum) {
        console.log(`Yes! ${(sum - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
 
 
}
toyShop("40.8", "20", "25", "30", "50", "10");
toyShop("320", "8", "2", "5", "5", "1");