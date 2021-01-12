function reverse(num, arr){

    let line = ""
    for(let i = num - 1 ; i >= 0 ; i--){
        line+= arr[i] + " "
        
    }
    console.log(line)
}
reverse(2, [66, 43, 75, 89, 47])