function strike(arr){
    let counter = 0
    let energy = Number(arr.shift())
    let index = 0
    let command = Number(arr[index])

    let isZero = false
    while(command != 'End of battle'){
        
         if(energy >= command){
        energy-=command
        counter++
         }else{
         console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
         isZero = true
               break
         }
        if(counter % 3 == 0){
            energy+=counter
        }
        index++
        command = arr[index]
    }
if(!isZero){
    console.log(`Won battles: ${counter}. Energy left: ${energy}`);
}
}
strike([
    '100', '10', '10',
    '10',  '1',  '2',
    '3' , 'End of battle'
  ])