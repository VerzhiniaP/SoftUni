function pass(input) {
    
    let name = input[0]
    let password = input[1]
    let passwords = input[2]

    let index = 3

    while (passwords !== password) {
        passwords = input[index]
        index++

    }
    console.log(`Welcome ${name}!`)
    
}
pass([ 'Nakov', 
'1234',
 'pass',
  '1324', 
  '1234' ]
)