function employee(arr){
 
    let employee = {}
    for (const element of arr) {
        employee[element] = element.length
    }
    Object.entries(employee).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}" `);
    });
  
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )