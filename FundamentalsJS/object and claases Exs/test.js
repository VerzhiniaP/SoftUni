function flight(arr){

    let object = {}
    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){

        let arrayOne = arr[i]
        let arrayTwo = arr[i + 1]
        for(let k = 0 ; k < arrayTwo.length ; k++){
            let [firstK, name1,name2] = arrayTwo[k].split(' ')
            for(let j = 0 ; j < arrayOne.length ; j++){
                 let [firstJ, name1, name2]= arrayOne[j].split(' ')
                if( firstK === firstJ){
                    newArr.push(name1)
                    break
                }
            }
        }
  }
  console.log(newArr);
}
flight([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],

 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],

 ['Cancelled']
]
)