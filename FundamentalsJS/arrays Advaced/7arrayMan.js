function manipulate(arr){

    let newArr = arr
    .shift()
    .split(' ')
    .map(Number)
    
    for(let i = 0 ; i < arr.length ; i++){
        let [command, first, second] = arr[i].split(' ')
        first = Number(first)
        second = Number(second)

        switch(command){
            case "Add" : newArr.push(first)
                break;
            case 'Remove': newArr = newArr.filter(x => x !== first)
                break;
            case 'RemoveAt' : newArr.splice(first, 1)
                break;
            case 'Insert' : newArr.splice(second,0, first)
                break;
        }
    }
    console.log(newArr.join(' '));
    
    

}
manipulate(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)