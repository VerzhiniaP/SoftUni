function sugar(arr){

    let sugarArr = arr.shift()
   
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].includes('Add')){
        let[command,value] = arr[i].split(' ')
        value = Number(value)
        sugarArr.push(value)
        }else if(arr[i].includes('Remove')){
         let [command,value] = arr[i].split(' ')
         value = Number(value)
         let indexDel = sugarArr.indexOf(value)
         sugarArr.splice(indexDel,1)
        }else if(arr[i].includes('Replace')){
            let[command,value,replacement] = arr[i].split(' ')
            value = Number(value)
            replacement = Number(replacement)
            let index = sugarArr.indexOf(value)
            sugarArr.splice(index,1,replacement)
        }else if(arr[i].includes('Collapse')){
        let[command,value] = arr[i].split(' ')
        value = Number(value)
        sugarArr = sugarArr.filter(x => x >= value)
        }else if(arr[i] == 'Mort'){
            break
        }
    }
console.log(sugarArr.join(' '));

}
sugar([[2, -1, 0, -3, 9, 8, 7, 2],
    "Collapse 8",
    "Mort"])
    
    