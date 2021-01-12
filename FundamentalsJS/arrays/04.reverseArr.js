function reverse(arr){
    
    
    
    for(let i = 0; i < Math.ceil(arr.length - 1) / 2 ; i++){
      word = arr[i] 

     arr[i] = arr[(arr.length - 1) - i]
     
     arr[(arr.length - 1) - i] = word
    
        
    }
    

    console.log(arr.join(' '))
}
reverse(['a', 'b', 'c', 'd', 'e'])