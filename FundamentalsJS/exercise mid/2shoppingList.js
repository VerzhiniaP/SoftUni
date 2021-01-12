function shopping(arr){

let list = arr.shift()
let listArr = list.split('!')

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i].includes('Urgent')){
        let [command,item] = arr[i].split(' ')
        if(!listArr.includes(item)){
            listArr.unshift(item)
        }
    }else if(arr[i].includes('Unnecessary')){
       let [command,item] = arr[i].split(' ')
       if(listArr.includes(item)){
           let index = listArr.indexOf(item)
           listArr.splice(index,1)
       }
    }else if(arr[i].includes('Correct')){
       let [command, oldName, newName] = arr[i].split(' ')
       if(listArr.includes(oldName)){
           let index = listArr.indexOf(oldName)
           listArr.splice(index,1,newName)
       }
    }else if(arr[i].includes('Rearrange')){
        let[command,item] = arr[i].split(' ')
        if(listArr.includes(item)){
            let index = listArr.indexOf(item)
            listArr.splice(index,1)
            listArr.push(item)
        }
    }else if(arr[i] == 'Go Shopping!'){
        console.log(listArr.join(', '));
        break;
    }
}

}
shopping([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
  )