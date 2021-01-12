function storage(arr){
    let mapStorage = new Map

    for (let line of arr) {
        let[product,qty] = line.split(' ')
        qty = Number(qty)

        if(mapStorage.has(product)){
         let oldQty = mapStorage.get(product)
         mapStorage.set(product, qty + oldQty)
        }else{
            mapStorage.set(product,qty)
        }
    }
    
    for (let line of mapStorage) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)