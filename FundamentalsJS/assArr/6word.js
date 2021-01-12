function storage(arr){

    let map = new Map
    
    for (let line of arr) {
        let count = 0
        if(map.has(line)){
          count++
         let number = map.get(line)
         map.set(line,number + count)
        }else{
           count++
            map.set(line,count)
        }
    }
    
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1])

   for (const line of sorted) {
       console.log(`${line[0]} -> ${line[1]} times`);
   }
}
storage(["Here", "is", "the", "first",
 "sentence", "Here", "is", "another",
  "sentence", "And", "finally", "the",
   "third", "sentence"]
)