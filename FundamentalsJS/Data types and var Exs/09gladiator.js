function gladiator(arg1, arg2, arg3, arg4, arg5){
    let countLost = arg1
    let helmetPrice = arg2
    let swordPrice = arg3
    let shieldPrice = arg4
    let armorPrice = arg5
    let helmetBroken = 0
    let swordBroken = 0
    let shieldBrake = 0
    let count = 0
    let expences = 0


    for(let i = 1; i <= countLost ; i++){
        count++
        if(count % 2 == 0 && count % 3 == 0){
            helmetBroken++
        swordBroken++
        shieldBrake++
     if(shieldBrake % 2 == 0){
         expences+=armorPrice
     }
        expences+=helmetPrice
        expences+=shieldPrice
        expences+=swordPrice
        }else if(count % 3 == 0){
            swordBroken++
            expences+=swordPrice
        }else if(count % 2 == 0 ){
        helmetBroken++
           expences+=helmetPrice
        }
    
    
}
console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`)

}
gladiator(7, 2, 3, 4, 5)