function town(arr){
    let obj = {}
    for(let line of arr){
        let [townName,product,price] = line.split(' | ')
        price = Number(price)
        if(!obj.hasOwnProperty(product)){
        obj[product] = {townName,price}
        }else{
           
            if(obj[product].price > price){
                obj[product] = {townName,price}
            }
        }
    
        }
    
   for(let line in obj){
        console.log(`${line} -> ${obj[line].price} (${obj[line].townName})`);
   }

}
town([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
  ])