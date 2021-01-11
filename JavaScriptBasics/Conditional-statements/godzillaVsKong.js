function sum(buget, count, price ) {
    buget = Number(buget);
    count = Number(count);
    price = Number (price);

    let decor = 0.1 * buget;
    let clothesPrice = count * price;
    let result = 0;

    if ( count > 150) {
        clothesPrice = clothesPrice * 0.9;
    }
    result = decor + clothesPrice;
    let diff = Math.abs(result - buget);

    if (result > buget) {
         
        console.log(`Not enough money!`);
       console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
       } else {
           console.log(`Action!`);
           console.log (`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
       }
    }
sum("20000",
"120",
"55.5")