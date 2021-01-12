function heart(arr){

    let housesArr = arr.shift()
    housesArr = housesArr.split('@').map(Number)
    let index = 0
    let command = arr[index]
    let lastIndex = 0
    while(command != 'Love!'){
        
    let [word,ind] = command.split(' ')
    ind = Number(ind)
    ind+=lastIndex
    if(ind >= housesArr.length){
        ind = 0
    }

    if(housesArr[ind] == 0){
        console.log(`Place ${ind} already had Valentine's day.`)
       
    }else {
    let inputNum = housesArr[ind] - 2
    if(inputNum == 0){
        console.log(`Place ${ind} has Valentine's day.`);
    }
    housesArr.splice(ind,1,inputNum) }
    
        lastIndex = ind
        index++
        command = arr[index]

    }
    let sum = 0
    let count = 0
    for (let num of housesArr) {
        if(num != 0){
            count++
        }
        sum+=num
    }
    console.log(`Cupid's last position was ${lastIndex}.`)
    if(sum == 0){
    console.log(`Mission was successful.`)
    }else{
        console.log(`Cupid has failed ${count} places.`);
    }

}
heart([
    '2@4@2',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ])