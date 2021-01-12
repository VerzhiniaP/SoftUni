function target(arr){

    let targetArr = arr.shift()
    targetArr = targetArr.split(' ')
    .map(Number)
    let shot = 0
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].includes('Shoot')){
          let array = arr[i].split(' ')
          array.shift()
         let index = Number(array[0])
         let power = Number(array[1])
         if(index >= 0 && index < targetArr.length){
             let num = targetArr[index]
             num-=power
             if(num<=0){
                 targetArr.splice(index,1)
                 shot++
             }else{
             targetArr.splice(index,1,num)
             }
         }
        }else if(arr[i].includes('Strike')){
            let array = arr[i].split(' ')
            array.shift()
           let index = array[0]
           let radius = array[1]
           let newIndex = index - radius
           let newValue = 2 * radius + 1
           if(newIndex >= 0 && newValue <= targetArr.length){
           targetArr.splice(newIndex,newValue)
           }else{
               console.log(`Strike missed!`);
           }
        }else if(arr[i].includes('Add')){
          let array = arr[i].split(' ')
            array.shift()
           let index = array[0];
           let value = array[1]
           if(index >= 0 && index < targetArr.length){
                targetArr.splice(index,0,value)
           }else{
               console.log(`Invalid placement!`);
           }
          
        }else if(arr[i] == 'End'){
            console.log(`${targetArr.join('|')}`);
            break
        }
    }
}
target([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
  ])