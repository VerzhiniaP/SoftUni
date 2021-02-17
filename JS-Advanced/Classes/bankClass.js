class Bank{
    constructor(bankName){
        this._bankName = bankName
        this.allCustomers = []
    }
    newCustomer({firstName,lastName,personalId}){
        
        for(let obj of this.allCustomers){
            if(obj.firstName == firstName && obj.lastName == lastName && obj.personalId == personalId){
                throw new Error(`${firstName} ${lastName} is already our customer!`)
            }
        }
        this.allCustomers.push({firstName,lastName,personalId})
        return {firstName,lastName,personalId}
    }
    depositMoney (personalId,amount){

        let person = this.allCustomers.find(person => person.personalId == personalId  )
        if(!person){
            throw new Error('We have no customer with this ID!')
        }
            if(!person.hasOwnProperty('totalMoney')){
                person['totalMoney'] = 0
            }
            person.totalMoney += Number(amount)
            if(!person.hasOwnProperty('Transactions')){
                person['Transactions'] = []
            }
            person.Transactions.push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`) 
            return `${person.totalMoney}$`
        }
    
    withdrawMoney(personalId,amount){
        let person = this.allCustomers.find(person => person.personalId == personalId  )
        if(!person){
            throw new Error('We have no customer with this ID!')
        }else{
                if(person.totalMoney < amount){
                    throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
                }
            }
        person.totalMoney-=amount
        if(!person.hasOwnProperty('Transactions')){
            person['Transactions'] = []
        }
        person.Transactions.push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`)
        return `${person.totalMoney}$`
    }
    customerInfo(personalId){
        let person = this.allCustomers.find(e=> e.personalId == personalId)
        if(!person){
            throw new Error`We have no customer with this ID!`
        }
           let arr = []
           let num = 1
           person.Transactions.forEach(x=>{
           arr.push([num,x])
           num++

       })
         arr.sort((a,b) => b[0] - a[0])
         let newArr = []
         for(let line of arr){
             newArr.push(line.join('. '))
         }
        
        return `Bank name: ${this._bankName}\nCustomer name: ${person.firstName} ${person.lastName}\nCustomer ID: ${person.personalId}\nTotal Money: ${person.totalMoney}$\nTransactions:\n${newArr.join('\n')}`
       
    }

    
    
    
}  
    let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName:'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

