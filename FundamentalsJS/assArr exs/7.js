function company (arr){

    let obj = {}
    
    for (let line of arr) {
        let [company , id] = line.split(' -> ')
        if(!obj.hasOwnProperty(company)){
            obj[company] = []
            obj[company].push(id)
        }else{
            if(!obj[company].includes(id)){
          obj[company].push(id)
            }
        }
    }
    let sorted = Object.entries(obj)
    .sort((a,b) => {
        a = a[0]
        b = b[0]
        return a.localeCompare(b)
    })
    for (let line of sorted) {
        console.log(line[0]);
        for (let word of line[1]) {
            console.log(`-- ${word}`);
        }
        
    }
    }
company([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )