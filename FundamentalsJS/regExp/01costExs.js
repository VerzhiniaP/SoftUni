function cost(arr){
 
    let sum = 0
    let print = 'Bought furniture:\n'
    
    for(let line of arr){
        let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<qty>[\d]+)/
        let match = pattern.exec(line)
        if(match){
            print += match.groups.furniture + '\n'
            sum+= Number(match.groups.price) * Number(match.groups.qty)
        }
    }
       print+= `Total money spend: ${sum.toFixed(2)}`
        console.log(print);

    
}
cost([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])