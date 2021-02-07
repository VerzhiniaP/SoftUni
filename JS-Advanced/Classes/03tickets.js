
function tickets(arr,string){

    class Ticket{
        constructor(destination,price,status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let newArr = []
    for(let line of arr){
        let [destination,price,status] = line.split('|')
        newArr.push(new Ticket(destination,price,status))
       
     }

     newArr.sort((a,b) => { 
     if(string == 'destination'){
        return a.destination.localeCompare(b.destination)
     }else if(string == 'price'){
         return a.price - b.price
     }else if(string == 'status'){
       return a.status.localeCompare(b.status)
     }
    })
     return newArr
    

}
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'

))