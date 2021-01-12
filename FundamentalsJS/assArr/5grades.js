function grades(arr){

    let collection = new Map

   for(let line of arr){
       let tokens = line.split(' ')
       let name = tokens.shift()
       let grades = tokens.map(Number)

       if(collection.has(name)){
         let old = collection.get(name)
         for (let grade of grades) {
             old.push(grade)
         }
       }else{
           collection.set(name,grades)
       }
      }
      let sorted = Array.from(collection)
      sorted.sort(compareAvr)
      
      for (let line of sorted) {
          console.log(`${line[0]}: ${line[1].join(', ')}`);
          
      }

      
      function compareAvr([nameA, gradeA],[nameB, gradeB]){
        let avrA = 0
        gradeA.forEach(x => avrA+=x)
        avrA/=gradeA.length

        let avrB = 0
        gradeB.forEach(x => avrB+=x)
        avrB/=gradeB.length

        return avrA - avrB
      }
}
grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)