function modifier(arr){

    let numbers = arr.shift()
    let newArr = numbers.split(' ')
    .map(Number)
       for(let i = 0 ; i < arr.length ; i++){
           let command = arr[i]
        if(command.includes('swap')){
        let [first,i1,i2] = command.split(' ')
           i1 = Number(i1)
           i2 = Number(i2)
           let numI1 = newArr.splice(i1,1,newArr[i2])
           newArr.splice(i2,1,numI1[0])
        }else if(command.includes('multiply')){
         let [first, i1,i2] = command.split(' ')
         i1 = Number(i1)
         i2 = Number(i2)
         let num1 = newArr.slice(i1,i1 + 1)
         let num2 = newArr.slice(i2,i2 + 1)
         let sum = num1 * num2
         newArr.splice(i1,1,sum)
        }
        else if(command.includes('decrease')){
         newArr = newArr.map(x => (x - 1))
        }else if(command == 'end'){
            break;
        }
   }
   console.log(newArr.join(', '));
}
modifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  )