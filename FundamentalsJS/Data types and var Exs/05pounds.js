function pounds(arg){

    let pounds = Number(arg)

    let dollar = 1.31

    let result = pounds * dollar

    console.log(result.toFixed(3))

}
pounds(80)