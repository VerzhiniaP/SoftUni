function letter(input){

    let start = input[0]
    let end = input[1]
    let skip = input[2]
    let isSkip = false
    printline = ""

    for (let i = start ; i <= end ; i++){
        for(let j = start ; j <= end ; j++){
            for(let k = start ; k <= end ; k++){
                if(i == skip || j == skip || k == skip){
                    isSkip = true
                    continue

                }else{
                    printline +=`${i}${j}${k} `
                }
            }
        }

    }
    console.log(printline)
}
letter([ 'a', 'c', 'b', '' ])