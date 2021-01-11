function solve(input) {
  let n = Number(input[0])

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  
   for(let i = 1 ; i < input.length ; i++) {
     let currentNum = Number(input[i])

    if ( currentNum % 2 === 0) {
      p1++
    } 
     }
     for(let i = 1 ; i < input.length ; i++) {
      let currentNum = Number(input[i]) 
      if(currentNum % 3=== 0){
        p2++
      }
    
    }
    for(let i = 1 ; i < input.length ; i++) {
      let currentNum = Number(input[i]) 
    if (currentNum % 4 === 0) {
      p3++
    }}
 
 
    console.log(`${(p1 / n * 100).toFixed(2)}%`)
    console.log(`${(p2 / n * 100).toFixed(2)}%`)
    console.log(`${(p3 / n * 100).toFixed(2)}%`)
    

  


    }
    solve (
      [
        '10',  '680', '2',
        '600', '200', '800',
        '799', '199', '46',
        '128', '65'
      ]
      

      )
