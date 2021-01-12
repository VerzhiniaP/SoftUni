function reception (arr){

  arr = arr.map(Number)
  let people = arr.pop()
  let eff = arr[0] + arr[1] + arr[2]
  let hour = 0
  while(people > 0){
    hour++
  if(hour % 4 != 0){
     people-= eff
  }
  }
  console.log(`Time needed: ${hour}h.`);
}
reception(['1','2','3','45'])