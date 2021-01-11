function sum(input){
    
    let command = input[0]
    let index = 0
  
    let sumPrime = 0
    let sumNotPrime=0
    


    
    while(command !== 'stop') {
        let flag = true
        let n = Number(command)
        if (n < 0) {
            console.log(`Number is negative.`)
            index++
            command = input[index]
            continue ;
        }
        if (n == 1){
            flag = false
        }else if(n == 2){
            flag = true
        }else {
            for(let i = 2 ; i < n ; i++) {
                if(n % i == 0) {
                    flag = false
                }
            }
        }
        if (flag){
            sumPrime += n
        }else{
            sumNotPrime+= n
        }
        index++
        command = input[index]

    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`)

}
sum ([
    '3',    '9',
    '0',    '7',
    '19',   '4',
    'stop'
  ])