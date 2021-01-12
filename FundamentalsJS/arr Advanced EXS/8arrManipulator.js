function manipulator(arrNum, arrCommand){

    let index = 0
    let isStop = false
    for(let i = 0 ; i < arrCommand.length ; i++){
        let command = arrCommand[i]

        if(command.includes('add')){
            command = arrCommand[i].split(' ')
            let firstWord = command.shift()
            if(firstWord === 'add'){
            arrNum.splice(Number(command[0]), 0,Number(command[1]))
            }else if(firstWord === 'addMany'){
            let index = Number(command.shift())
            for (let i = 0 ; i < command.length ; i++) {
                arrNum.splice(index++,1, Number(command[i]) )
            }}
        }else if(command.includes('contains')){
            command = arrCommand[i].split(' ')
            command.shift()
             index = arrNum.indexOf(Number(command[0]))
             console.log(index);
         }else if(command.includes('remove')){
            command = arrCommand[i].split(' ')
            command.shift()
            arrNum.splice(Number(command[0]),1)
        }else if(command.includes('shift')){
            command = arrCommand[i].split(' ')
            command.shift()
            command = Number(command)
            for(let i = 0 ; i < command ; i++){
            let first = arrNum.shift()
            arrNum.push(first) 
            }
        }else if(command.includes('sumPairs')){

        }else if(command.includes('print')){
            isStop = true
            break
       }
}
if(isStop){
    console.log(arrNum)
}

}
manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )