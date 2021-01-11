function train(input){
    let n = Number(input[0])
    let presentaion = input[1]
    let index = 1
    let totalSum=0
    let count = 0
    


    while( presentaion !== 'Finish') {
        count++
        let sum = 0
        for(i = 1 ; i <= n ; i++) {
            index++
            sum+= Number(input[index])
        }
        let avg = sum/n
        console.log(`${presentaion} - ${avg.toFixed(2)}.`)
        totalSum += avg
        index++
        presentaion = input[index]
    }
    let totalAvg = totalSum / count
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`)
}
train([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish'
  ])