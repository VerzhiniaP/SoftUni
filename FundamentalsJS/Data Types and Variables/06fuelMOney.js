function money(arg1, arg2, arg3){
    let distance = Number(arg1)
    let passengers = Number(arg2)
    let priceForDiesel = Number(arg3)

    

    let neededFuel = (distance / 100) * 7
    neededFuel += passengers * 0.100
    let result = neededFuel * priceForDiesel
    console.log(`Needed money for that trip is ${result}lv.`)

}
money("260", "9", "2.49")