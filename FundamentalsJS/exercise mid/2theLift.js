function lift(arr){

     let people = Number(arr.shift())
     let wagons = arr[0]
     let numArr = wagons.split(' ')
     .map(Number)
     let isPeopleleft = false
  
     for(let i = 0 ; i < numArr.length ; i++){
        for(let j = numArr[i] ; j < 4 ; j++){
            if(people == 0){
    console.log(`The lift has empty spots!
${numArr.join(' ')}`);
isPeopleleft = true
    }
            numArr[i]++
            people--
        }
     }
     if(!isPeopleleft){
         if(people == 0){
         console.log(`${numArr.join(' ')}`);
         }else{
     console.log(`There isn't enough space! ${people} people in a queue!
${numArr.join(' ')}`)}
         }

}
lift([
    "20",
    "0 0 0 0 0"
   ]
   
   )