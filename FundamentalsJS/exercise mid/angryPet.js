function angryPet(arg1,arg2,arg3,arg4){
    let priceRate = arg1
    let entryPoint = arg2
    let typeOfItem = arg3
    let typeOfPrice = arg4

    let sumRigth = 0
    let sumLeft = 0
    let entryNumber = priceRate[entryPoint]

   for(let i = entryPoint + 1 ; i < priceRate.length ; i++){
       
        if(typeOfItem == 'cheap'){
           if(priceRate[i] < entryNumber){
            if(typeOfPrice == 'all'){
                sumRigth += priceRate[i]
            }else if(typeOfPrice == 'positive'){
                   if(priceRate[i] >= 0){
                    sumRigth += priceRate[i] 
                   }
            }else if(typeOfPrice == 'negative'){
                   if(priceRate[i] < 0){
                       sumRigth += priceRate[i]
                   }
              }
           }
        }else if(typeOfItem == 'expensive'){
            if(priceRate[i] >= entryNumber){
                if(typeOfPrice == 'all'){
                    sumRigth += priceRate[i]
                   }else if(typeOfPrice == 'positive'){
                       if(priceRate[i] >= 0){
                        sumRigth += priceRate[i] 
                       }
                   }else if(typeOfPrice == 'negative'){
                       if(priceRate[i] < 0){
                           sumRigth += priceRate[i]
                       }
                   }
            }
        }
      
    }

   for(let j = entryPoint - 1 ; j >= 0 ; j--){
    if(typeOfItem == 'cheap'){
        if(priceRate[j] < entryNumber){
         if(typeOfPrice == 'all'){
             sumLeft += priceRate[j]
         }else if(typeOfPrice == 'positive'){
                if(priceRate[j] >= 0){
                 sumLeft += priceRate[j] 
                }
         }else if(typeOfPrice == 'negative'){
                if(priceRate[j] < 0){
                    sumLeft += priceRate[j]
                }
           }
        }
     }else if(typeOfItem == 'expensive'){
         if(priceRate[j] >= entryNumber){
             if(typeOfPrice == 'all'){
                 sumLeft += priceRate[j]
                }else if(typeOfPrice == 'positive'){
                    if(priceRate[j] >= 0){
                     sumLeft += priceRate[j] 
                    }
                }else if(typeOfPrice == 'negative'){
                    if(priceRate[j] < 0){
                        sumLeft += priceRate[j]
                    }
                }
         }
     }
   
   }
   if(sumLeft >= sumRigth){
       console.log(`Left - ${sumLeft}`);
   }else{
       console.log(`Right - ${sumRigth}`);
   }

   
}

angryPet([1, 5, 1],
    1,
    "cheap",
    "all")


