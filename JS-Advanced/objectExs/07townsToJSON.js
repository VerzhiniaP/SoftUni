function town(arr){

    let newArr = []
  for(let i = 0 ; i < arr.length ; i++){
     let [Town,Latitude,Longitude] = arr[i].split('|').filter(x=> x!="")
    for(let j = i + 1 ; j < arr.length ; j++){
        let [town,latitude,longitude] = arr[j].split('|').filter(x=> x!="")
        town = town.trim()
        latitude = latitude.trim()
        latitude = Number(Number(latitude).toFixed(2))
        longitude = longitude.trim()
        longitude = Number(Number(longitude).toFixed(2))
        let obj = {Town:town,Latitude:latitude,Longitude:longitude}
        newArr.push(obj)
        
    }
     
   break
  }
  return JSON.stringify(newArr)
}
console.log(town(
    ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']

));