function building(input) {

    let floor = Number(input[0])
    let apartment = Number(input[1])

    for(let i = floor ; i > 0 ; i--) {
        let result = ""
        for(let j = 0 ; j < apartment ; j++) {
            if (floor == i) {
                result += `L${i}${j} `
            }else if(i % 2 === 0) {
                result += `O${i}${j} `
            }else{
                result += `A${i}${j} `
                
            }         
        }
        console.log(result)
    } 
}
building(['6' , '4'])