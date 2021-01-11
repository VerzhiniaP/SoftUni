function jump(input){
    let jelanaVisochina = Number(input[0])
    let count = 0
    let broi = 0
    let neuspql = 0
    let isFailed = false


    let postavenaLetva = jelanaVisochina - 30

    while(postavenaLetva <= jelanaVisochina){
        for(let i = 1; i <= 3 ; i++){
            let currentJump = Number(input[i])
            count++
            if(currentJump > postavenaLetva){
                postavenaLetva+=5
                break;
            }
            if (i == 2) {
                console.log(``)
                isFailed = true
            }
        }
        if(isFailed) {
            break
        }
    }
    if(!isFailed){
        console.log(`Tihomir succeeded, he jumped over ${jelanaVisochina}cm after ${count} jumps.)`)
    }





}
    
jump([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235' ])