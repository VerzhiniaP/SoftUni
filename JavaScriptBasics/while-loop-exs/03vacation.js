function vacation(input) {
    let needMoney = Number(input[0])
    let money = Number(input[1])
    let index = 2
    let command = input[2] // spend
    let currentMoney = Number(input[3])
    let spendingDays=0
    let counter = 0

    while(money < needMoney) {
        counter++
        if(command == "spend") {
            if(money < currentMoney) {
                money = 0;
            } else {
                money -= currentMoney
            }
            
            spendingDays++
        } else {
            money += currentMoney
        }

        if(spendingDays >= 5){
            console.log(`You can't save the money.`)
            console.log(`${(input.length - 2) / 2}`)
            break
        }
      
        index+=2
        command = input[index]
        currentMoney = Number(input[index + 1])
    }

    if (money >= needMoney) {
        console.log(`You saved the money for ${counter} days.`)
    }
}