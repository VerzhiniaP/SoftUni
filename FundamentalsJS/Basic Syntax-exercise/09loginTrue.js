function test(input){

    let username = input.shift()
    let pass = username.split('').reverse().join('')

    for(i = 0 ; i < input.length ; i ++){
        if(input[i] === pass){
            console.log(`User ${username} logged in.`)
        }else{
            if( i == 3){
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }


    }
  
    
}
test([ 'Acer', 'login', 'go', 'let me in', 'recA' ])