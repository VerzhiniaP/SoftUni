function sale(input){
    let seaPrice = 680
    let mountPrice = 499
    let price = 0
    let isZero = false
    let seaCount = Number(input[0])
    let mountCount = Number(input[1])
     index = 2
    let name = input[index]
    index++

    while(name !== 'Stop'){
        if(name === 'sea'){
            if(seaCount == 0){
                isZero = true
                name = input[index]
                index++
                continue;
            }
            price += seaPrice
            seaCount--

        }else{
            if(mountCount == 0){
                isZero = true
                name = input[index]
                index++
                continue;
            }
            price += mountPrice
            mountCount--
        }
        if(mountCount == 0 && seaCount == 0){
            console.log(`Good job! Everything is sold.`)
            console.log(`Profit: ${price} leva.`)
            isZero = true
            break;
        }
        
        name = input[index]
        index++
    }

    if(!isZero){
       
        console.log(`Profit: ${price} leva.`)
    }


}
sale([ '2', '2', 'sea', 'mountain', 'sea', 'sea', 'mountain' ]

  )