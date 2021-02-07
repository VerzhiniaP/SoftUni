function car(arr){

    let obj = {}
    for(let line of arr){
        let [brand,model,produced] = line.split(' | ')
        produced = produced
        if(!obj.hasOwnProperty(brand)){
            obj[brand] = {}
        }
        if(!obj[brand][model]){
         obj[brand][model] = 0
        }
        obj[brand][model]+= Number(produced)
    }
   for(let line in obj){
       console.log(line)
       for(let row in obj[line]){
           console.log(`###${row} -> ${obj[line][row]}`);
       }
   }
    
}
car(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)