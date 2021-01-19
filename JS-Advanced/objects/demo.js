
let obj = {
    name: 'Peter',
    lastName: 'Peterson',
    fullName(){
        return `${this.name} ${this.lastName}`
    },
    myAge(){
        return `${this.lastName} ${this.fullName()}`
    }

}
console.log(obj.myAge());

