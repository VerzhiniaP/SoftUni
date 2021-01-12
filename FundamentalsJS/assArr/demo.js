function word(arr){
    let words = arr.shift()
    let[first,second] = words.split(' ')
    
    let map = new Map
    map.set(first,0)
    map.set(second,0)
   for (let line of arr) {
       if(line.includes(first)){
        
           let number = map.get(first)
          
           map.set(line,number + 1)
           
       }
        if(line.includes(second)){
            let number = map.get(second)
            map.set(line,number + 1)
            
        }
   }

   let sorted = Array.from(map).sort((a,b) => b[1] - a[1])
   
   for (let line of sorted) {
       console.log(`${line[0]} - ${line[1]}`);
   }
}
word([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )