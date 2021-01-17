function num(arr){

    let newArr = []
    for(let i = 0 ; i < arr.length - 1 ; i++){
       for(let j = 0 ; j < arr[i].length ; j++){
           let a = arr[i][j]
           let b = arr[i+1][j]
          if(a == b){
              newArr.push(a)
          }
          

           
       }
    }
    return newArr.length
}
console.log(num([['2', '3', '4', '7', '0'],
['4', '0', '5', '5', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))
console.log(num([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))