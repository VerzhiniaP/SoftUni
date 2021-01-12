function demo(arr){

    let max = Number(arr.shift())
    let obj = {}
    let command = arr.shift()

    while(command != 'Statistics'){
        let tokens = command.split('=')
        if(tokens.includes('Add')){
         let userName = tokens[1]
         let sent = Number(tokens[2])
         let received = Number(tokens[3])
         if(!obj.hasOwnProperty(userName)){
             obj[userName] = []
             obj[userName].push(sent)
             obj[userName].push(received)
         }

        }else if(tokens.includes('Message')){
          let sender = tokens[1]
          let receiver = tokens[2]
          if(obj.hasOwnProperty(sender) && obj.hasOwnProperty(receiver)){
              obj[sender][0]++
              obj[receiver][1]++
              if((obj[sender][0] + obj[sender][1]) >= max){
                  delete obj[sender]
                  console.log(`${sender} reached the capacity!`);
              }
              if((obj[receiver][0] + obj[receiver][1]) >= max){
                  delete obj[receiver]
                  console.log(`${receiver} reached the capacity!`);
              }
          }
        }else if(tokens.includes('Empty')){
           let userName = tokens[1]
           if(obj.hasOwnProperty(userName)){
                   delete obj[userName]
           }
           if(userName == 'All'){
            obj = {}
        }
           
        }
        command = arr.shift()
    }
let count = Object.values(obj).length
let sorted = Object.entries(obj).sort((a,b) => b[1][1] - a[1][1] ||
a[0].localeCompare(b[0]))

console.log(`Users count: ${count}`)
for(let line of sorted){
    console.log(`${line[0]} - ${line[1][0] + line[1][1]}`);
}

}
demo([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
  ]
  )