function hoods(arr){

    let map = new Map
    let list = arr.shift()
    let array = list.split(', ')
  
  for (let line of array) {
    map.set(line,[])
  }
  
  for (let line of arr) {
    let [address,name] = line.split(' - ')
    if(map.has(address)){
      let second = map.get(address)
      second.push(name)
      
    }
  }
  let sorted = Array.from(map).sort((a,b) => b[1].length - a[1].length)

  for (let line of sorted) {
    console.log(`${line[0]}: ${line[1].length}`)
    if(line[1][0])
    {console.log(`--${line[1][0]}`)
  }
    if(line[1][1]){
      console.log(`--${line[1][1]}`)
    }
   }
}
hoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)