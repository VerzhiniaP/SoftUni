function cleverLily(age, priceWashingMachine, toyPrice) {
    age = Number(age);
    priceWashingMachine = Number(priceWashingMachine);
    toyPrice = Number(toyPrice);

    let sumMoney = 0;
    let toy = 0;
    let money = 10;

    for(let i = 1 ; i <= age; i++){
        if(i % 2 === 0){
            sumMoney += money - 1;
            money += 10;
        }else{
            toy ++;

        }
    }
    sumMoney += toy * toyPrice;
    let diff = sumMoney - priceWashingMachine


    if(diff >= 0) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
    

}
cleverLily("10", "170.00", "6")