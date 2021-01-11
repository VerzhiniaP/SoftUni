function safari (arg1, arg2, arg3) {
    let budget = Number(arg1)
    let fuelLiter = Number(arg2)
    let day = arg3

    let fuelPrice = fuelLiter * 2.10
    let person = 100

    totalMoney = fuelPrice + person
    if(day === "Saturday") {
        totalMoney*= 0.90
    }else{
        totalMoney*= 0.80
    }

    if(budget >= totalMoney) {
        let diff = budget - totalMoney
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`)
    }else{
        let diff = totalMoney - budget
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`)
    }




}
safari("120", "30", "Saturday")