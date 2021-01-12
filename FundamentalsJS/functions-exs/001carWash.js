function carWash(arr){

    let percentage = 0
    for(let i = 0 ; i < arr.length ; i++){
        let element = arr[i]

        if(element == 'soap'){
            percentage+=10
        }else if(element == 'water'){
            percentage*=1.20
        }else if(element == 'vacuum cleaner'){
            percentage*=1.25
        }else if(element == 'mud'){
            percentage*=0.9
        }
 }
   return `The car is ${percentage.toFixed(2)}% clean.`


}
console.log(carWash([ 'soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water' ]))