function magic(arr){
    let first = arr[0]
    let sumF = 0
    let sumS = 0
    let sumT = 0
    let second = arr[1]
    let third = arr[2]


   
    let isMagic = false
      for(let ii = 0 ; ii < first.length ; ii++){
          sumF+= first[ii]
          for(let jj = 0 ; jj < second.length ; jj++){
              sumS+=second[ii]
              for(let kk = 0 ; kk < third.length ; kk++){
                  sumT+=third[ii]
                  if(sumF == sumS && sumS == sumT){
                      if(first[ii] == second[ii] && second[ii] == third[ii]){
                         
                      }else{
                        
                          console.log(`false`)
                          isMagic = true
                          break;
                      }
                  }

                 
              }
          }
      } 
    
   
         if(!isMagic){

          console.log(`true`) }
      
        
}
magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])