class ChristmasDinner {
    constructor(budget){
        this.budget = Number(budget)
        // if(budget < 0){
        //     throw new Error(`The budget cannot be a negative number`)
        // }
        this.dishes = []
        this.products = []
        this.guests = {}
    }
    set budget(value){
        if(value < 0){
            throw new Error(`The budget cannot be a negative number`)
        }
        this._budget = value
 
    }
    get budget(){
        return this._budget
    }
    shopping(product){
        let type = product[0]
        let price = product[1]
        if(this.budget < price){
            throw new Error(`"Not enough money to buy this product"`)
        }
        this.budget-= price
        this.products.push(type)
       
        return `You have successfully bought ${type}!`

    }
    recipes(recipe){

        recipe.productsList.forEach(product =>{
            if(!this.products.includes(product)){
                throw new Error("We do not have this product")
            } })
                this.dishes.push(recipe)
                return `${recipe.recipeName} has been successfully cooked!`

    }
    inviteGuests(name, dish){
     if(this.dishes.forEach(x=> x.recipeName !== dish)){
         throw new Error("We do not have this dish")
     }else if(this.guests.hasOwnProperty(name)){
         throw new Error("This guest has already been invited")
     }

     this.guests[name] = dish
     return `You have successfully invited ${name}!`

    }
    showAttendance(){
         let result = []
         Object.entries(this.guests).forEach(([guestName, dish]) => {
             result.push(`${guestName} will eat ${dish}, which consist of ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}`)
         })
         return result.join('\n')
    //    let printLine = ''
    //      for(let line in this.guests){
    //          let name = line
    //          let meal = this.guests[line]
    //          for(let obj of this.dishes){
    //              if(obj.recipeName == meal){
    //                  printLine += `${name} will eat ${meal}, which consists of ${(obj.productsList).join(', ')}\n`
    //              }
    //          }
    //      }
    //      return printLine
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
