function numbers(input){

    let arr = []
    arr = input.split(' ')
    .map(Number)
    let sum = 0
    let count = 0
    let averageNum = 0
    for (let num of arr) {
        count++
        sum+=num
    }
    averageNum = sum / count
   let newArr = []
   let isMore = false
   for (let i = arr.length ; i >= 0; i--) {
       if(arr[i] > averageNum){
           newArr.push(arr[i])
           if(newArr.length >= 5){
               isMore = true
              newArr.sort((a,b) => b-a)
               console.log(newArr.join(' '));
               break
           }
       }
   }
  if(!isMore){
       newArr.sort((a,b) => b - a)
       if(newArr.length == 0){
           console.log(`No`);
       }else{
       console.log(newArr.join(' '))
       }
   }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')