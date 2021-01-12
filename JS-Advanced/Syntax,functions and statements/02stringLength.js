function string(one,two,three){
    
    let sum = 0
    sum = one.length + two.length + three.length
    console.log(sum)
    let avrSum = sum / 3
    console.log(Math.floor(avrSum));

}
string('chocolate', 'ice cream', 'cake')