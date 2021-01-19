function town(arr){

    let obj = {}
    for(let i = 0 ; i < arr.length ; i++){
        let [townName,population] = arr[i].split(' <-> ')
        if(!obj.hasOwnProperty(townName)){
          obj[townName] = 0
        }
        obj[townName] += Number(population)
    }
    for (let line in obj) {
        console.log(`${line} : ${obj[line]}`);
    }
    
}
town(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)