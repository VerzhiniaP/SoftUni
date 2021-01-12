function travel(arr){

    let obj = {}
    for (let line of arr) {
        let [country, town, price] = line.split(' > ')
        price = Number(price)
        if(!obj.hasOwnProperty(country)){
        obj[country] = {}
        obj[country][town] = price
        }else{
            if(!obj[country].hasOwnProperty(town)){
            obj[country][town] = price
            
            }else{
                if(price < obj[country][town]){
                    obj[country][town] = price
                }
            }
            
        }
    }
   let array = Object.entries(obj).sort(([x,x1],[y,y1]) =>  x.localeCompare(y) || 
    
   x1[town] - y1[town])


   for (let line of array) {
       let row = ""

       for (let iterator in line[1]) {
           row += iterator + ' -> ' + line[1][iterator] + ' '

       }
       console.log(`${line[0]} -> ${row}`);
       
   }
    }
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )