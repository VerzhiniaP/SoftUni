function word(arr){
    let words = arr.shift()
    .split(' ')

    let obj = {}
    for (let line of words) {
        obj[line] = 0
    }
    for (let line of arr) {
        if(obj.hasOwnProperty(line)){
            obj[line]++
        }
    }
    let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1])
    for (let line of sorted) {
        console.log(`${line[0]} - ${line[1]}`);
    }
 
}
word([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )