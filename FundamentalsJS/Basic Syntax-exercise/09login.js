function login(input){

    let username = input.shift()
    let pass = username.split('').reverse().join('')
    //console.log(pass)
    let counter = 0
    let isMore = false
    index = 0
    let word = input[index]

    while(pass !== word ){
        counter++
        word = input[index]
       
        if(counter >= 4){
            if(pass == word){
                console.log(`User ${username} logged in.`) ;
                isMore = true
             break ;
            }else{
            console.log(`User ${username} blocked!`)
            isMore = true
            break;}
        }
        console.log(`Incorrect password. Try again.`)
       

        index++
    }
    if(!isMore){
        console.log(`User ${username} logged in.`)
    }
   

}
login([ 'sunny', 'rainy', 'cloudy', 'sunny', 'not sunny' ]
)