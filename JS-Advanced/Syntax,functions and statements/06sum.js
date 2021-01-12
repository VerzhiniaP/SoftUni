function sum(numOne,numTwo){
numTwo = Number(numTwo)
numOne = Number(numOne)
let sum = 0
for(let i = numOne; i <= numTwo ; i++){
    sum+= i
}
console.log(sum);
}
sum('1', '5')