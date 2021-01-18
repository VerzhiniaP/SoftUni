function rotate(arr,times){

    for(let i = 0 ; i < times; i++){
        let last = arr.pop()
        arr.unshift(last)
    }
    console.log(arr.join(' '));
}
rotate(['1', 
'2', 
'3', 
'4'], 
2
)