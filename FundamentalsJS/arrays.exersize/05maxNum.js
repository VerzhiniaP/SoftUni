function max(arr){

    
    let print = []

    for(let i = 0 ; i < arr.length ; i++){
        let isMax = true
        for(let j = i + 1 ; j < arr.length ; j++ ){
            if(arr[i] <= arr[j]){
                isMax = false
                break;
                }
               }
       if(isMax){
            print.push(arr[i]) 
        }
}
  
console.log(print.join(' '))
}
max([41, 41, 34, 20])