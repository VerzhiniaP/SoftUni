function book(arr){
    let assObj = {}

    for (let line of arr) {
        let[name,number] = line.split(' ')
        assObj[name] = number
    }
   for (let key in assObj) {
       console.log(`${key} -> ${assObj[key]}`);
   }

}
book(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)