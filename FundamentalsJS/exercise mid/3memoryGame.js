function memory(arr){

    let element = arr.shift()
    let arrEl = element.split(' ')
     let counter = 0    
     isFinish = false
     index = 0
     let command = arr[index]
     while(command !== 'end'){
         counter++
        let [num1, num2] = command.split(' ')
        num1 = Number(num1)
        num2 = Number(num2)
        if(num1 == num2 || num1 < 0 || num2 < 0
        || num1 >= arrEl.length || num2 >= arrEl.length){
           let ind = arrEl.length/2
           arrEl.splice(ind,0,`-${counter}a`,`-${counter}a`)
           console.log(`Invalid input! Adding additional elements to the board`)
           }else if(arrEl[num1] === arrEl[num2]){
                let element = arrEl.splice(num1,1)
                if(num2 != 0){
                arrEl.splice(num2-1,1)}
                else{
                    arrEl.splice(num2,1)
                }
                console.log(`Congrats! You have found matching elements - ${element}!`);
        }else{
                console.log(`Try again!`);
            }
             if(arrEl.length == 0){
                console.log(`You have won in ${counter} turns!`);
                isFinish = true
                break
            }
        index++
        command = arr[index]
         }
     if(!isFinish){
         console.log(`Sorry you lose :(
${arrEl.join(' ')}`);
     }
}
memory( [
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
       
    )