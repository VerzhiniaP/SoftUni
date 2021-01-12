function piccolo(arr){

    let obj = {}
    for (let line of arr) {
        let [action,number] = line.split(', ')
       if(action == 'IN'){
          obj[number] = 1
       }else if(action == 'OUT'){
          delete obj[number]
       }
    }
     let sorted = Object.keys(obj)
     .sort((a,b) => a.localeCompare(b))
     .join('\n')
   
     if(sorted.length == 0){
       console.log(`Parking Lot is Empty`);
   }else{
      console.log(sorted);
       }
   }
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']



)