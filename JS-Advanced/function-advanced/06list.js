function list(arr){
    let inner = []
    let obj = {
        add: (string) => inner.push(string),
        remove: (string) => {
            for(let i = 0 ; i<inner.length ; i++){
             if (string == inner[i]){
            let index = inner.indexOf(string)
            inner.splice(index,1)
             }
            }
        },
        print: () => console.log(inner.join(','))
    }
    for(let line of arr){
        let[command,string] = line.split(' ')
        obj[command](string)
    }
}
list(['add pesho', 'add george', 'add peter', 'remove peter','print'])