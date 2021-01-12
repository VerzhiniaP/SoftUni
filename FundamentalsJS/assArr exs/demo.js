function arena(arr){

    let obj = {}

    for (let line of arr) {
        if(line.includes('vs')){
           let [nameOne,nameTwo] = line.split(' vs ')
           if(obj.hasOwnProperty(nameOne) && obj.hasOwnProperty(nameTwo)){
               if(obj[nameOne] == obj[nameTwo]){
                   if(obj[nameOne][tech] > obj[nameTwo][tech]){
                       delete obj[nameTwo]
                   }else{
                       delete obj[nameOne]
                   }
               }
           }
        }else if(line.includes('->')){
            let [name,tech,skill] = line.split(' -> ')
            skill = Number(skill)
            if(!obj.hasOwnProperty(name)){
                if(name == 'Pesho'){
                    name == 'Peter'
                }
                obj[name] = {}
                obj[name][tech] = skill
            }else{
            if(tech == obj[name]){
                if(skill > obj[name][tech]){
                obj[name][tech] = skill
                }
            }else{
                obj[name][tech] = skill
            }
        }
             
        }

        if(line == 'Ave Cesar'){
            break
        }
    }
    console.log(obj);

}
arena([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    
    )