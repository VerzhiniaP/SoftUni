function smallest(input) {
    let min = Number.MAX_SAFE_INTEGER
    let index = 0
    let command = input[index]
    index++

    while(command !== "Stop") {
        let num = Number(command)
        if (num < min) {
            min = num
        }
        command = input[index]
        index++
    }
    console.log(min)



}
smallest([ '100', '99', '80', '70', 'Stop' ])