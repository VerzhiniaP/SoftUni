function number(n) {
    n = Number(n);

    if (n > -100 && n < 100 && n !=0 ) {
        console.log("Yes")
    } else {
        console.log("No")
    }

}

number("25")