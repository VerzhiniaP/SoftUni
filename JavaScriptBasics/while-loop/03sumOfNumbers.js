function sum(input) { 

  let n = Number(input[0])
  let sum = 0
  let index = 1


  while(sum < n) {
      let number = Number(input[index])
      sum+=number
      index++

  }
  console.log(sum)

} 
sum([ '100',
 '10',
  '20',
   '30',
    '40' ]
)