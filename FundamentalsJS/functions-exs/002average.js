function average(number){

for(let j = 0 ; j < Infinity ; j++){
    let avrValue = sum(number)
      if(avrValue > 5){
          isAvr = true
          break;
      }else{
          number = String(number)
          number+=9
          
          }
  }
  function sum(num){
    let sum = 0
    num = String(num)
    for(let i = 0 ; i < num.length ; i++){
        sum+= Number(num[i])
    }
    sum /= num.length
    return sum
  }
return number 
}
console.log(average(101))

