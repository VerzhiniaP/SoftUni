function address(arr){

    let obj = {}

    for (let line of arr) {
        let[name,adress] = line.split(':')
        obj[name] = adress
        }

        let entries = Object.entries(obj)
        entries.sort((a,b) => {
            let nameA = a[0]
           let nameB = b[0]
           return nameA.localeCompare(nameB)
        })
        for (let line of entries) {
            console.log(`${line[0]} -> ${line[1]}`);
        }
       
        

}
address(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)