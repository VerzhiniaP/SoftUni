function time(arr){

    let obj = {
        'Vip' : [],
        'regular' : []
    }
   
    let line = arr.shift()
   
    while(line != 'PARTY'){
        let arrLine = line.split('')
        if(!isNaN(arrLine[0])){
            obj.Vip.push(line)
        }else{
            obj.regular.push(line)
        }
        
        line = arr.shift()
    }

    for (let line of arr) {
        if(obj.Vip.includes(line)){
        let index = obj.Vip.indexOf(line)
        obj.Vip.splice(index,1)
        }else if(obj.regular.includes(line)){
            let index = obj.regular.indexOf(line)
            obj.regular.splice(index,1)
        }
    }
    console.log(`${obj.Vip.length + obj.regular.length}`);
    console.log(`${obj.Vip.join('\n')}`)
    console.log(`${obj.regular.join('\n')}`);
    
}
time(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)