function letter(input) {
    let n = Number(input[0])
    let mix = 0
    let mix2 = 0
    let printLine= ''
   
 
    for(let i = 1 ; i < n ; i++){
        if(i >= 1 && i <=9 ) {
      
        for(let j = 1 ; j < n ; j++){
            if(j >= 1 && j <=9 ) {
            for(let k = 1 ; k < n ; k++){
                if(k >= 1 && k <=9 ) {
                
                for(let h = 1 ; h < n ; h++){
                    if(h >= 1 && h <=9 ) {
                    mix = i + j
                    mix2 = k + h
                    

                    if(mix == mix2){
                        if(n % mix == 0){
                          
                            printLine += `${i}${j}${k}${h} `
                            
                            
                            
                        }

                    }else{
                        continue
                    }
                }
            }
        }

    }}}}}
    console.log(printLine)
    
}
letter([24])