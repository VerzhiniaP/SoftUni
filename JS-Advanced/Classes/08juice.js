function juice(arr){
let obj = {}
let objBottles = {}

for(let line of arr){
    let [name,qty] = line.split('=>')
    qty = Number(qty)
    if(!obj.hasOwnProperty(name)){
        obj[name] = 0
    }
    obj[name] += qty
    if(obj[name] >= 1000){
        if(!objBottles.hasOwnProperty(name)){
          objBottles[name] = 0
        }
        while(obj[name] >= 1000){
          objBottles[name]+=1
          obj[name]-=1000
        }
    }
}
for(let line in objBottles){
    console.log(`${line}=> ${objBottles[line]}`);
}
}
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)