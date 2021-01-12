function card(arr){

     let object = {}

     for(let line of arr){
         let [name,cards] = line.split(': ')
         let cardArr = cards.split(', ')
          for (let pair of cardArr) {
             if(!object.hasOwnProperty(name)){
                object[name] = []
                object[name].push(pair)
             }else{
                if(!object[name].includes(pair))
              object[name].push(pair)
            }
         }
         }
    
         let obj = {}
         for (let row in object) {
             obj[row] = []
            for (let line of object[row]){
                let [power,type, x] = line.split('')
                let total = 0
             let powerSum = 0
             let typeSum = 0
             if(!isNaN(type)){
                powerSum = power + type
                type = x
               }else if(power == 'J'){
                    powerSum =11
                }else if(power == 'Q'){
                    powerSum = 12
                }else if(power == 'K'){
                    powerSum =13
                }else if(power == 'A'){
                    powerSum = 14
                }else{
                    power = Number(power)
                    powerSum =power
                }

                if(type == 'S'){
                    typeSum = 4
                }else if(type == 'H'){
                    typeSum = 3
                }else if(type == 'D'){
                    typeSum = 2
                }else if(type == 'C'){
                    typeSum = 1
                }
                total = powerSum * typeSum
                obj[row].push(total)
            }
         }
         
         for(let line in obj){
             let total = 0
             for (let num of obj[line]) {
                 total+= num
             }
             console.log(`${line}: ${total}`);
         }
}
card([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )
