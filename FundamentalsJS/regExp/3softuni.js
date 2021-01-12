function softuni(arr){

    let total = 0
    for(let line of arr){
      
            let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/
            let match = regex.exec(line)
            if(match){
                console.log(`${match.groups.name}: ${match.groups.product} - ${(Number(match.groups.count) * Number(match.groups.price)).toFixed(2)}`)
                total+= Number(match.groups.count) * Number(match.groups.price)
    
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
softuni([
    [
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
      ]
  ])