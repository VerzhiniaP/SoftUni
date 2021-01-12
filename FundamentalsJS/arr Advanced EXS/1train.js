function train(arr){

    let wagons = arr
    .shift()
    .split(' ')
    .map(Number)
    let maxCapacity = Number(arr.shift())
  
    for(let i = 0 ; i < arr.length ; i++){
        let [command, passenegers] = arr[i].split(' ')
        passenegers = Number(passenegers)
        if(command == 'Add'){
            wagons.push(passenegers)
        }else{
            command = Number(command)
           for(let i = 0 ; i < wagons.length ; i++){
               let num = Number(wagons[i])
                   num+=command
                   if(num <= maxCapacity){
                   wagons[i] = num
                   break;
               }
           }
        }
    }
    console.log(wagons.join(' '))

}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

)