function shoot(arr){

    let targetArr = arr.shift()
    .split(' ')
    .map(Number)
    index = 0
    let command = arr[index]
    let shot = 0
    let takeNum = 0
    while( command!== 'End'){
        let i = Number(command)
        if(i >= 0 && i < targetArr.length ){
        takeNum = targetArr.splice(i,1,-1)
        shot++
        for (let num = 0 ; num < targetArr.length; num++) {
            if( targetArr[num] != -1){
                if(targetArr[num] > takeNum[0]){
             let diff = targetArr[num] - takeNum[0]
             targetArr.splice(num,1,diff)
                }else{
                    let diff = targetArr[num] + takeNum[0]
                    targetArr.splice(num,1,diff)
                }
         }
        }
        }
        index++
        command = arr[index]
    }
    console.log(`Shot targets: ${shot} -> ${targetArr.join(' ')}`);
}
shoot([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ])