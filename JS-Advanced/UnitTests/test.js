const { assert, expect } = require('chai')
const { makeAnOrder } = require('./pizza')
const pizzUni = require('./pizza')

describe('Tests' , () => {

  it('Make an order',()=>{
      let pizza = {}
      let pizza1 = {orderedPizza: 'pizza'}
      let pizza2 = {orderedDrink: 'drink'}
      let pizza4 = {orderedPizza: 'pizza', orderedDrink: 'drink'}

      expect(() => pizzUni.makeAnOrder(pizza)).to.throw('You must order at least 1 Pizza to finish the order.')
      //assert.throw(()=>pizzUni.makeAnOrder(pizza),'You must order at least 1 Pizza to finish the order.')

      expect(()=> pizzUni.makeAnOrder(pizza2)).to.throw('You must order at least 1 Pizza to finish the order.')
      //assert.throw(()=>pizzUni.makeAnOrder(pizza2),'You must order at least 1 Pizza to finish the order.')

      
      //assert.equal(pizzUni.makeAnOrder(pizza1),`You just ordered ${pizza1.orderedPizza}`)
        expect(pizzUni.makeAnOrder(pizza1)).to.equal(`You just ordered ${pizza1.orderedPizza}`)

      //assert.equal(pizzUni.makeAnOrder(pizza4),`You just ordered ${pizza4.orderedPizza} and ${pizza4.orderedDrink}.`)
      expect(pizzUni.makeAnOrder(pizza4)).to.equal(`You just ordered ${pizza1.orderedPizza} and ${pizza4.orderedDrink}.`)
  })
  it('getRemainingWork', ()=>{
      let statusArr = [{pizzaName: 'pizza', status: 'ready'}]
      let statusArr1 = [{pizzaName: 'pizza', status: 'ready'},{pizzaName: 'pizza2', status: 'ready'}]
      let statusArr2 = [{pizzaName1: 'pizza', status: 'preparing'},{pizzaName2: 'pizza2', status: 'preparing'},
    {pizzaName3: 'pizza3', status: 'ready'},{pizzaName4: 'pizza4', status: 'ready'}]
      let statusArr3 = [{pizzaName: 'pizza4', status: 'preparing'},{pizzaName2: 'pizza5', status: 'preparing'},
      {pizzaName: 'pizza', status: 'preparing'}]

      expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!')
      //assert.equal(pizzUni.getRemainingWork(statusArr), 'All orders are complete!')

      expect(pizzUni.getRemainingWork(statusArr1)).to.equal('All orders are complete!')
     // assert.equal(pizzUni.getRemainingWork(statusArr1), 'All orders are complete!')

      expect(pizzUni.getRemainingWork(statusArr2)).to.equal(`The following pizzas are still preparing: , .`)
     // assert.equal(pizzUni.getRemainingWork(statusArr2), `The following pizzas are still preparing: pizza, pizza2.`)

     expect(pizzUni.getRemainingWork(statusArr3)).to.equal(`The following pizzas are still preparing: pizza4, , pizza.`)
      //assert.equal(pizzUni.getRemainingWork(statusArr3), 'The following pizzas are still preparing: pizza4, , pizza.')
    })
it('orderType', ()=>{
    //assert.equal(pizzUni.orderType(100,'Delivery'), '100')
    expect(pizzUni.orderType(100,'Delivery')).to.equal(100)

    //assert.equal(pizzUni.orderType(0,'Delivery'), '0')
    expect(pizzUni.orderType(-100,'Delivery')).to.equal(-100)

    //assert.equal(pizzUni.orderType(-100,'Delivery'), '-100')
    expect(pizzUni.orderType(0,'Delivery')).to.equal(0)

   // assert.equal(pizzUni.orderType(100,'Carry Out'), '90')
    expect(pizzUni.orderType(100,'Carry Out')).to.equal(90)

   // assert.equal(pizzUni.orderType(0,'Carry Out'), '0')
    expect(pizzUni.orderType(0,'Carry Out')).to.equal(0)

   // assert.equal(pizzUni.orderType(-100,'Carry Out'), '-90')
    expect(pizzUni.orderType(-100,'Carry Out')).to.equal(-90)
})
})