function factorial(num) {
    num = Number(num)

    let product = 1

    for(let i = num ; i >= 2 ; i--) {
        product *=i;
        

    }

console.log(product)

}
factorial("8")