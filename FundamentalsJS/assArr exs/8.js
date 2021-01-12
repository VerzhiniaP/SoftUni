function miner(arr){

    let obj = {}

    for(let i = 0 ; i< arr.length ; i++){
        if(i % 2 == 0){
            if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = Number(arr[i + 1])
            }else{
                obj[arr[i]] += Number(arr[i + 1])
            }
        }
    }
    for (let line in obj) {
        console.log(`${line} -> ${obj[line]}`);
    }
}
miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    
    )
