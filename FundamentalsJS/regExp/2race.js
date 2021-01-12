function race(arr){

    let listNames = arr.shift()
    .split(', ')
    let obj = {}
    for(let line of listNames){
         obj[line] = 0
    }
    let regex = /[A-Za-z]/g
    for(let line of arr){
       if(line == 'end of race'){
            break
        }else{
            let match = line.match(regex)
        let name = match.join('')
        if(obj.hasOwnProperty(name)){
            let numArr = line.match(/[\d]/g)
            let sum = 0
            for (let num of numArr) {
                sum+=Number(num)
            }
            obj[name]+=sum
        }
    }
}
let sorted = Object.entries(obj).sort((a,b) => b[1]- a[1])

    console.log(`1st place: ${sorted[0][0]}
2nd place: ${sorted[1][0]}
3rd place: ${sorted[2][0]}
    `)
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )