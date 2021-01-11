function graduation(input) {
    
   let index = 0
   let name = input[index]
   index++
   let grade = 1 //level
   let error = 0
   let sum = 0 //scorre

   while(grade <= 12) {
       let grades = Number(input[index])
       index++
       if (grades >= 4.00) {
           sum+=grades;
           grade++
        } else{
           error+=1
           if(error > 1) {
               console.log(`${name} has been excluded at ${grade} grade`)
               break ;
           }
       }
       if (grade > 12) {
           let average = sum / 12
           console.log(`${name} graduated. Average grade: ${average.toFixed(2)} `)
       }
   }

    }

graduation([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ])