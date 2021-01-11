function newHome(flower, count, budjet) {

    count =Number(count);
    budjet = Number (budjet);
    let result = 0;

    if (flower === "Roses") {
        result = count * 5;
        if ( count > 80) {
            result = result * 0.9;
        }

    } else if (flower === "Dahlias") {
        result = count * 3.80;
        if (count > 90) {
            result = result * 0.85;
        }

    } else if (flower === "Tulips") {
        result = count * 2.80
        if (count > 80) {
            result = result * 0.85;
        }

    } else if (flower === "Narcissus") {
        result = count * 3;
        if (count < 120) {
            result = result * 1.15;
        }

    } else if (flower === "Gladiolus"){
        result = count * 2.50;
        if (count < 80) {
            result = result * 1.20;
        }

    }
    let diff = budjet - result;
    if (budjet >= result) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
    }

}

newHome("Gladiolus",
"64", 
"160")