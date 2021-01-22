function storage(arr){
let obj = {}
for(let line of arr){
    let [product,price] = line.split(' : ')
    price = Number(price)
    let letter = product[0]
    if(!obj[letter]){
        obj[letter] = []
    }
    obj[letter].push([product,price])
}
let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))

let newArr=[]
 for(let line of sorted){
    let result = ''
     let letter = line[0]
     let arrWithObj = line[1]
     arrWithObj.sort((a,b) => a[0].localeCompare(b[0]))
     result=`${letter}\n`
     for(let key of arrWithObj){
         result+= `  ${key[0]}: ${key[1]}\n`
     }
     newArr.push(result)
 }
 console.log(newArr.join(''));
}

storage(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)