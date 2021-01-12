function add(arr){

    let newArr = []
    let num = 0
    for (let i = 0; i < arr.length; i++) {
         if(arr[i] === 'add'){
            num+= 1
           newArr.push(num)

         }else{
             
             newArr.pop()
             num+=1
         }
        
    }
    if(newArr.length == 0){
        console.log(`Empty`)
    }else{
    console.log(newArr.join(' '))
    }
}
add(['remove', 'remove', 'remove' ]
)