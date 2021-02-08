const { expect } = require('chai')
const PaymentPackage = require('./13')

describe('PaymentPackage tests', () => {
    // let instace = undefined
    // beforeEach(()=>{
    //     instance = new PaymentPackage('Name', 100)
    // })
    it('constructor', ()=>{
        instance = new PaymentPackage('Name', 100)
        expect(instance._name).to.equal('Name')
        expect(instance._value).to.equal(100)
        expect(instance._VAT).to.equal(20)
        expect(instance._active).to.equal(true)
    })
    it('name', ()=>{
        instance = new PaymentPackage('Name', 100)
        expect(instance.name).to.equal('Name')
    })
    it('value', ()=>{
        expect()
    })
    it('VAT', ()=>{
        expect()
    })
    it('active', ()=>{
        expect()
    })
    it('toString', ()=>{
        expect()
    })
})