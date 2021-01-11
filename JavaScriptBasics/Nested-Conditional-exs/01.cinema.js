function cinema(type, r, c) {
    r = Number(r);
    c = Number(c);

    let result = 0

    if (type === "Premiere") {
        ticket = 12.00;
        result = (r * c ) * 12.00 ; {
            console.log (`${result.toFixed(2)} leva`);
        }

    } if (type === "Normal") {
        ticket = 7.50;
        result = (r * c) * 7.50; {
            console.log(`${result.toFixed(2)} leva`)
        }
    } if (type === "Discount") {
        ticket = 5.00;
        result = (r * c) * 5.00; {
            console.log (`${result.toFixed(2)} leva`)
        }
    }


}

cinema ("Discount",
"12",
"30")