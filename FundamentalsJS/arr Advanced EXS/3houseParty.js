function houseParty(arr){

    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        let name = nameArr(arr)
        let splitted = splitArr(arr)
        
        
        if(splitted == 'is going!'){
            newArr.push(name)

        }else if(splitted == 'is not going!'){

        }

    }
 
  function splitArr(arr){
  let first = arr[0].split(' ')  
  first.shift()
  return first.join(' ')
  }
  function nameArr(arr){
      let name = arr[0].split(' ')
      return name[0]
  }


}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)