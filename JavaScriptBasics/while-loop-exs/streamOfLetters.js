function letters(input){
    
    index = 0
    let command = input[index]
    let printLine = ""
    let countN = 0
    let countO = 0
    let countC = 0
    
    while(command !== 'End'){
        command = input[index]
        

        if(command == 'n'){
            countN++
            if(countN >= 1){
                index++
                command = input[index]
            continue
            }else{
                printLine+=command
            }
            

        }else if(command == 'c'){
            countC++
            if(countC >= 1){

                index++
                command = input[index]
            continue
            }else{
                printLine+=command
            }
            
        }else if(command == 'o'){
            countO++
            if(countO == 1){
                printLine += command + " "
               
                
            }else if(countO > 1) {
                index++
                command = input[index]
                continue
                
            }

        }else{
            printLine +=command
           
           
        }

        index++
        command = input[index]

    }
    console.log(`${printLine}`)
    

}
letters([
    'H', 'n',   'e', 'l',
    'l', 'o',   'o', 'c',
    't', 'c',   'h', 'o',
    'e', 'r',   'e', 'n',
    'e', 'End'
  ])