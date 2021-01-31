function filter(data,criteria){
    let newData = JSON.parse(data)
    let string = criteria.split('-')
    let newArr = []
    let isAll = false
    if(criteria.includes('all')){
        isAll = true
        for(let i = 0 ; i < newData.length; i ++){
              let fullname = `${newData[i].first_name} ${newData[i].last_name}`
         console.log(`${i}. ${fullname} - ${newData[i].email}`);
        }
        
        }

        if(!isAll){
    for(let line of newData){
        for(let obj in line){
            if(string[0] == obj && line[obj] == string[1]){
               let fullname = `${line.first_name} ${line.last_name}`
               newArr.push({[fullname]: line.email})
             }
             }
        }

   for(let i = 0 ; i < newArr.length ; i++){
       for(let name in newArr[i]){
           console.log(`${i}. ${name} - ${newArr[i][name]}`);
       }
   }
}

}
filter(`[{"id": "1","first_name": "Kaylee",
"last_name": "Johnson",
"email": "k0@cnn.com","gender": "Female"},
 {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com",
 "gender": "Female"}, {"id": "3",
 "first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com",
 "gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Johnson",
 "email": "ev2@hostgator.com",
 "gender": "Male"}]`,
'all'
)