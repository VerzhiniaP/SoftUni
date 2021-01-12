function astra([arr]){

    let regex = /(\||\#)(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,5})\1/g
    let match = regex.exec(arr)
    let obj = []
    let totalCal = 0
   
    while(match != null){
      obj.push({food: match[2], day: match[3], cal: match[4]})
        totalCal+= Number(match[4])
        match = regex.exec(arr)
    }
    let days = totalCal / 2000
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
     for(let i = 0 ; i < obj.length ; i++){
         console.log(`Item: ${obj[i].food}, Best before: ${obj[i].day}, Nutrition: ${obj[i].cal}`)
         
     }
}
astra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|#Fish#20/12/20#800#'
  ]
  )