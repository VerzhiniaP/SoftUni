function fruit(product,weightGr,priceKg){

    let weightKg = weightGr / 1000
    let money = weightKg * priceKg
    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${product}.`);
    

}
fruit('apple', 1563, 2.35)